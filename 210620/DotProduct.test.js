function solution1(a, b) {
  let result = 0;

  for (const i in a) {
    result += a[i] * b[i];
  }
  return result;
}

function solution2(a, b) {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
    expect(solution([-1, 0, 1], [1, 0, -1])).toBe(-2);
  });
});
