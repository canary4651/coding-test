function solution(n) {
  const result = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());

  let row = -1;
  let column = 0;
  let fill = 0;

  for (let i = n; i > 0; i -= 3) {
    result[++row][column] = ++fill;

    for (let j = 0; j < i - 1; j++) result[++row][column] = ++fill;
    for (let j = 0; j < i - 1; j++) result[row][++column] = ++fill;
    for (let j = 0; j < i - 2; j++) result[--row][--column] = ++fill;
  }

  return result.flat();
}

test('solution', () => {
  expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(5)).toEqual([1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
  expect(solution(6)).toEqual(
    [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
  );
});
