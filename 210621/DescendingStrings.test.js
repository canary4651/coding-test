function solution1(s) {
  return s.split('').sort().reverse().join('');
}

function solution2(s) {
  const x = s.split('').sort().reduce((acc, cur) => cur + acc, []);

  return x;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution('Zbcdefg')).toBe('gfedcbZ');
    expect(solution('dxsFseSd')).toBe('xsseddSF');
  });
});
