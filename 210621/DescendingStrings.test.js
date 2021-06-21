function solution(s) {
  return s.split('').sort().reverse().join('');
}

test('solution', () => {
  expect(solution('Zbcdefg')).toBe('gfedcbZ');
  expect(solution('dxsFseSd')).toBe('xsseddSF');
});
