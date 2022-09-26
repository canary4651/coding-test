function solution(s) {
  const splited = s.toLowerCase().split(' ');
  const upper = splited.reduce((acc, cur) => `${acc} ${cur.replace(/^[a-z]/, (char) => char.toUpperCase())}`, []);
  const result = upper.replace(/^[\s\uFEFF\xA0]+/gi, '');

  return result;
}

test('solution', () => {
  expect(solution('3people unFollowed me')).toEqual('3people Unfollowed Me');
  expect(solution('for the last week')).toEqual('For The Last Week');
});
