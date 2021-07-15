function solution(arr, divisor) {
  const result = [];

  arr.map((v) => {
    if (v % divisor === 0) {
      result.push(v);
    }
  });

  return result.length ? result.sort((a, b) => a - b) : [-1];
}

test('solution', () => {
  expect(solution([5, 9, 7, 10], 5)).toStrictEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toStrictEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toStrictEqual([-1]);
});
