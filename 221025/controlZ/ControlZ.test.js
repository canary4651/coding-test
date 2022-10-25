function solution(s) {
  const arr = s.split(' ');

  while (arr.includes('Z')) {
    arr.splice(arr.indexOf('Z') - 1, 2);
  }

  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

test('solution', () => {
  expect(solution('1 2 Z 3')).toEqual(4);
  expect(solution('10 20 30 40')).toEqual(100);
});
