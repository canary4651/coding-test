function solution(s) {
  const number = s.split(' ');
  const max = Math.max.apply(null, number);
  const min = Math.min.apply(null, number);
  return `${min} ${max}`;
}

test('solution', () => {
  expect(solution('1 2 3 4')).toEqual('1 4');
  expect(solution('-1 -2 -3 -4')).toEqual('-4 -1');
  expect(solution('-1 -1')).toEqual('-1 -1');
});
