function solution1(s) {
  s = s.toUpperCase().split('');

  const p = s.filter((x) => x === 'P');
  const y = s.filter((x) => x === 'Y');

  return p.length === y.length;
}

function solution2(s) {
  return s.toUpperCase().split('P').length
  === s.toUpperCase().split('Y').length;
}

function solution3(s) {
  s = s.toUpperCase();

  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'P') {
      p++;
    } else if (s[i] === 'Y') {
      y++;
    }
  }

  return p === y;
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution('pPoooyY')).toBeTruthy();
    expect(solution('Pyy')).toBeFalsy();
  });
});
