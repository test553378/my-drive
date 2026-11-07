// Column-major matrices for WebGL. Camera right is cross(forward, up).
export function perspective(fov, ar, n, f) {
  const o = new Float32Array(16),
    v = 1 / Math.tan(fov / 2);
  o[0] = v / ar;
  o[5] = v;
  o[10] = (f + n) / (n - f);
  o[11] = -1;
  o[14] = (2 * f * n) / (n - f);
  return o;
}
export function lookAt(e, t) {
  const norm = (a) => {
      let v = Math.hypot(...a) || 1;
      return a.map((x) => x / v);
    },
    cross = (a, b) => [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ],
    sub = (a, b) => a.map((x, i) => x - b[i]),
    dot = (a, b) => a.reduce((v, x, i) => v + x * b[i], 0);
  let f = norm(sub(t, e)),
    s = norm(cross(f, [0, 1, 0])),
    u = cross(s, f);
  return new Float32Array([
    s[0],
    u[0],
    -f[0],
    0,
    s[1],
    u[1],
    -f[1],
    0,
    s[2],
    u[2],
    -f[2],
    0,
    -dot(s, e),
    -dot(u, e),
    dot(f, e),
    1,
  ]);
}
export function mul(a, b) {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
      for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
  return o;
}

export function projectPoint(matrix, point) {
  const v = [...point, 1];
  const out = [0, 0, 0, 0];
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 4; col++)
      out[row] += matrix[col * 4 + row] * v[col];
  return [out[0] / out[3], out[1] / out[3], out[2] / out[3]];
}
