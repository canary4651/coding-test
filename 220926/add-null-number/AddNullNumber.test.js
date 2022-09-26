function solution(numbers) {
  const required = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const difference = required.filter((x) => !numbers.includes(x));
  const result = difference.reduce((acc, cur) => acc + cur);
  return result;
}

test('solution', () => {
  expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toEqual(14);
  expect(solution([5, 8, 4, 0, 6, 7, 9])).toEqual(6);
});
