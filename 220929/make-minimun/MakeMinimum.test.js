function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const result = A.reduce((acc, cur, i) => acc + cur * B[i], 0);

  return result;
}

test('solution', () => {
  expect(solution([1, 2], [3, 4])).toEqual(10);
  expect(solution([1, 4, 2], [5, 4, 4])).toEqual(29);
});
