const div = (a, b) => parseInt(a / b);

const step = (n) => (n < 3 ? '124'[n] : step(div(n, 3) - 1) + step(n % 3));

function solution(n) {
  return step(n - 1);
}

test('solution', () => {
  expect(solution(1)).toBe('1');
  expect(solution(3)).toBe('4');
  expect(solution(4)).toBe('11');
});
