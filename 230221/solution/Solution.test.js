function solution(sizes) {
  const w = [];
  const h = [];
  sizes.map((v, i) => {
    w[i] = Math.max(...v);
    h[i] = Math.min(...v);
  });

  return Math.max(...w) * Math.max(...h);
}

test('solution', () => {
  expect(solution([[60, 50], [30, 70], [60, 30], [80, 40]])).toEqual(4000);
  expect(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])).toEqual(120);
  expect(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])).toEqual(133);
});

function solution1(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  return Math.max(...rotated.map((v) => v[0])) * Math.max(...rotated.map((v) => v[1]));
}

test('solution', () => {
  expect(solution1([[60, 50], [30, 70], [60, 30], [80, 40]])).toEqual(4000);
  expect(solution1([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])).toEqual(120);
  expect(solution1([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])).toEqual(133);
});
