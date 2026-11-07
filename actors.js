const C = (r, g, b) => [r / 255, g / 255, b / 255];
export function createActors(Mesh) {
  const tyre = new Mesh(),
    N = 24,
    R = 8;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < R; j++) {
      const p = (a, b) => {
        const r = 0.51 + 0.14 * Math.cos(b);
        return [r * Math.cos(a), 0.17 + 0.14 * Math.sin(b), r * Math.sin(a)];
      };
      tyre.quad(
        p((i * Math.PI * 2) / N, (j * Math.PI * 2) / R),
        p(((i + 1) * Math.PI * 2) / N, (j * Math.PI * 2) / R),
        p(((i + 1) * Math.PI * 2) / N, ((j + 1) * Math.PI * 2) / R),
        p((i * Math.PI * 2) / N, ((j + 1) * Math.PI * 2) / R),
        C(23, 27, 31),
        7,
      );
    }
  tyre.done();
  const rock = new Mesh()
    .sphere(0, 0.55, 0, 0.85, 0.62, 0.76, C(128, 132, 129), 0, 9, 5)
    .done();
  const crate = new Mesh().box(0, 0.65, 0, 1.3, 1.3, 1.3, C(153, 102, 62));
  for (const y of [0.13, 1.16])
    crate.box(0, y, 0.66, 1.35, 0.1, 0.05, C(104, 68, 43));
  for (const x of [-0.54, 0.54])
    crate.box(x, 0.65, 0.68, 0.12, 1.28, 0.06, C(196, 145, 90));
  crate.done();
  const barrier = new Mesh();
  for (const side of [-1, 1]) {
    barrier.box(side * 0.8, 0.4, 0, 0.12, 0.8, 0.12, C(109, 125, 139), 6);
    barrier.box(side * 0.8, 0.08, 0, 0.52, 0.12, 0.55, C(39, 46, 54), 7);
  }
  for (let i = 0; i < 8; i++)
    barrier.box(
      -0.96 + i * 0.275,
      0.83,
      0,
      0.275,
      0.45,
      0.13,
      i % 2 ? C(233, 235, 222) : C(222, 72, 39),
      0,
    );
  barrier.done();
  const shirts = [C(237, 177, 55), C(63, 139, 177), C(129, 176, 111)].map((c) =>
    new Mesh().box(0, 0, 0, 0.39, 0.53, 0.24, c).done(),
  );
  const heads = [C(218, 173, 133), C(153, 102, 72), C(102, 75, 55)].map((c) => {
    const m = new Mesh().sphere(0, 0, 0, 0.18, 0.21, 0.18, c, 0, 10, 6);
    for (const side of [-1, 1])
      m.box(side * 0.065, 0.04, 0.171, 0.025, 0.025, 0.02, C(29, 31, 35));
    return m.done();
  });
  const leg = new Mesh()
    .box(0, -0.2, 0, 0.14, 0.4, 0.15, C(45, 56, 74))
    .box(0, -0.42, 0.035, 0.17, 0.1, 0.24, C(37, 43, 50), 7)
    .done();
  const arm = new Mesh()
    .box(0, -0.18, 0, 0.11, 0.36, 0.12, C(225, 186, 148))
    .done();
  const wrench = new Mesh()
    .box(0, 0.9, 0, 0.14, 1.15, 0.15, C(199, 219, 226), 6)
    .box(-0.17, 1.5, 0, 0.15, 0.42, 0.15, C(199, 219, 226), 6)
    .box(0.17, 1.5, 0, 0.15, 0.42, 0.15, C(199, 219, 226), 6)
    .box(0, 1.34, 0, 0.4, 0.14, 0.15, C(199, 219, 226), 6)
    .done();
  const warning = new Mesh()
    .sphere(0, 0, 0, 0.26, 0.26, 0.26, C(255, 190, 46), 4, 8, 4)
    .done();
  return {
    obstacles: { tyre, rock, crate, barrier },
    shirts,
    heads,
    leg,
    arm,
    wrench,
    warning,
  };
}
