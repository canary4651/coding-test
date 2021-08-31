function solution(words) {
  const voewl = ['A', 'E', 'I', 'O', 'U'];
  const gap = [781, 156, 31, 6, 1];

  return words.split('')
    .reduce((acc, cur, i) => acc + gap[i] * voewl
      .indexOf(cur) + 1, 0);
}

test('solution', () => {
  expect(solution('I')).toBe(1563);
  expect(solution('AAAAE')).toBe(6);
  expect(solution('AAAE')).toBe(10);
  expect(solution('EIO')).toBe(1189);
});
