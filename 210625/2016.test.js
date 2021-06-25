const DAY_NAMES = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution1(month, day) {
  return DAY_NAMES[new Date(2016, month - 1, day).getDay()];
}

function solution2(month, day) {
  const monthDays = MONTH_DAYS.slice(0, month - 1)
    .reduce((acc, cur) => acc + cur, 0);

  return DAY_NAMES[(DAY_NAMES.indexOf('FRI') + monthDays + day - 1) % 7];
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(1, 1)).toBe('FRI');
    expect(solution(5, 24)).toBe('TUE');
  });
});
