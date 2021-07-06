function solution1(s, n) {
  return s.split('').map((v) => {
    if (v === ' ') return v;

    return v.toUpperCase().charCodeAt(0) + n > 90
      ? String.fromCharCode(v.charCodeAt(0) + n - 26)
      : String.fromCharCode(v.charCodeAt(0) + n);
  }).join('');
}

function solution2(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const text = s[i];
    if (text === ' ') {
      result += ' ';
      continue;
    }

    const textArry = upper.includes(text) ? upper : lower;

    let index = textArry.indexOf(text) + n;

    if (index >= textArry.length) {
      index -= textArry.length;
    }
    result += textArry[index];
  }
  return result;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution('AB', 1)).toBe('BC');
    expect(solution('z', 1)).toBe('a');
    expect(solution('a B z', 4)).toBe('e F d');
  });
});
