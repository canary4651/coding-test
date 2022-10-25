function solution(s) {
  return s.map((v) => v.length);
}

test('solution', () => {
  expect(solution(['We', 'are', 'the', 'world!'])).toEqual([2, 3, 3, 6]);
});
