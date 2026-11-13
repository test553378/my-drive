import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";

export class AssetPool {
  constructor(progress, event) {
    this.progress = progress;
    this.event = event;
    this.bytes = new Map();
    this.jobs = new Map();
    this.models = new Map();
    this.loadedBytes = 0;
    this.manifest = null;
  }
  async init() {
    const r = await fetch("./game-assets.json");
    if (!r.ok) throw Error(`game-assets.json: HTTP ${r.status}`);
    this.manifest = await r.json();
    const [color, normal, rough, hdr] = await Promise.all([
      this.texture("asphalt-color.jpg", true),
      this.texture("asphalt-normal.jpg"),
      this.texture("asphalt-rough.jpg"),
      this.fetch("sunset.hdr"),
    ]);
    this.road = { color, normal, rough };
    const data = new HDRLoader().parse(hdr);
    this.hdr = new THREE.DataTexture(
      data.data,
      data.width,
      data.height,
      data.format,
      data.type,
    );
    this.hdr.flipY = true;
    this.hdr.magFilter = this.hdr.minFilter = THREE.LinearFilter;
    this.hdr.mapping = THREE.EquirectangularReflectionMapping;
    this.hdr.colorSpace = THREE.LinearSRGBColorSpace;
    this.hdr.needsUpdate = true;
  }
  async fetch(name) {
    if (this.jobs.has(name)) return this.jobs.get(name);
    const job = (async () => {
      const info = this.manifest.files[name];
      if (!info) throw Error(`Unlisted local asset: ${name}`);
      this.progress(name, this.loadedBytes);
      const r = await fetch(new URL(info.path, document.baseURI));
      if (!r.ok) throw Error(`${name}: HTTP ${r.status}`);
      let bytes;
      if (r.body?.getReader) {
        const reader = r.body.getReader(),
          parts = [];
        let count = 0;
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          parts.push(value);
          count += value.length;
          this.loadedBytes += value.length;
          this.progress(name, this.loadedBytes);
        }
        bytes = new Uint8Array(count);
        let offset = 0;
        for (const part of parts) {
          bytes.set(part, offset);
          offset += part.length;
        }
      } else {
        bytes = new Uint8Array(await r.arrayBuffer());
        this.loadedBytes += bytes.length;
      }
      if (bytes.length !== info.bytes)
        throw Error(`${name}: size mismatch (${bytes.length}/${info.bytes})`);
      // SubtleCrypto is available on HTTPS Pages; integrity failure is explicit.
      if (crypto.subtle) {
        const hash = Array.from(
          new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)),
        )
          .map((v) => v.toString(16).padStart(2, "0"))
          .join("");
        if (hash !== info.sha256) throw Error(`${name}: SHA-256 mismatch`);
      }
      this.bytes.set(name, bytes.buffer);
      this.event("asset-loaded", `${name}: ${bytes.length} bytes`);
      return bytes.buffer;
    })();
    this.jobs.set(name, job);
    return job;
  }
  async texture(name, color = false) {
    const data = await this.fetch(name),
      url = URL.createObjectURL(new Blob([data], { type: "image/jpeg" }));
    try {
      const t = await new THREE.TextureLoader().loadAsync(url);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      return t;
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  async model(name) {
    if (!this.models.has(name)) {
      const task = (async () => {
        const loader = new GLTFLoader();
        loader.setMeshoptDecoder(MeshoptDecoder);
        const { scene } = await loader.parseAsync(await this.fetch(name), "");
        return scene;
      })();
      this.models.set(name, task);
    }
    return this.models.get(name);
  }
}
