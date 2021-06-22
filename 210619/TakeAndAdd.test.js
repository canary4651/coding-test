function addTwoNumber(numbers) {
  return [...new Set(numbers.reduce((acc, cur, i, arr) => [
    ...acc, ...arr.slice(i + 1).map((number) => number + cur),
  ], []))];
}

function solution(numbers) {
  return addTwoNumber(numbers).sort((a, b) => a - b);
}

test('add two values in array and remove duplicated value', () => {
  expect(addTwoNumber([2, 1, 3, 4, 1])).toStrictEqual([3, 5, 6, 4, 2, 7]);
});

test('solution', () => {
  expect(solution([2, 1, 3, 4, 1])).toStrictEqual([2, 3, 4, 5, 6, 7]);
});
