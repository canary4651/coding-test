function solution(box, n) {
  const length = Math.floor((box[0] / n));
  const width = Math.floor((box[1] / n));
  const heigth = Math.floor((box[2] / n));
  return length * width * heigth;
}

test('solution', () => {
  expect(solution([1, 1, 1], 1)).toEqual(1);
  expect(solution([10, 8, 6], 3)).toEqual(12);
});
