function solution(t, p) {
  let count = 0;

  for (let i = 0; i < t.length - p.length; i += 1) {
    const substr = t.slice(i, i + p.length);
    if (substr <= p) count++;
  }

  return count;
}

test('solution', () => {
  expect(solution('3141592', '271')).toEqual(2);
  expect(solution('500220839878', '7')).toEqual(8);
});
