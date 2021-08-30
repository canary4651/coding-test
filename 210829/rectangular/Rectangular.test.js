function getGcd(w, h) {
  const mod = w % h;

  if (mod === 0) {
    return h;
  }

  return getGcd(h, mod);
}

function solution(w, h) {
  const gcd = getGcd(w, h);

  return w * h - (w + h - gcd);
}

test('getGcd', () => {
  expect(getGcd(8, 12)).toBe(4);
});

test('solution', () => {
  expect(solution(8, 12)).toBe(80);
});
