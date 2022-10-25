function solution(my_string) {
  return [...new Set(my_string)].join('');
}

test('solution', () => {
  expect(solution('people')).toEqual('peol');
  expect(solution('We are the world')).toEqual('We arthwold');
});
