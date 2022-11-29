function solution(numbers) {
  const required = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const difference = required.filter((x) => !numbers.includes(x));
  const result = difference.reduce((acc, cur) => acc + cur);
  return result;
}

test('solution', () => {
  expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toEqual(14);
});

function solution1(a, b) {
  // a와 b의 index끼리 곱한 다음 더하면 된다.
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}

test('solution', () => {
  expect(solution1([1, 2, 3, 4], [-3, -1, 0, 2])).toEqual(3);
});
