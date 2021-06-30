function solution1(s) {
  const arry = s.split(' ');
  return arry.map((word) => word
    .split('')
    .map((v, i) => ((i % 2 === 0) ? v.toUpperCase() : v.toLowerCase()))
    .join(''))
    .join(' ');
}

function solution2(s) {
  const fs = ['toUpperCase', 'toLowerCase'];
  return [...s].reduce((acc, cur, i) => acc + cur[fs[i % 2]]()
    , '');
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution('try hello world')).toBe('TrY HeLlO WoRlD');
  });
});
