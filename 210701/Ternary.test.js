function solution(n) {
  const ternary = n.toString(3).split('').reverse().join('');
  return parseInt(ternary, 3);
}

test('solution', () => {
  expect(solution(45)).toBe(7);
  expect(solution(125)).toBe(229);
});
