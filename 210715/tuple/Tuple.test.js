function parse(s) {
  const inner = s.slice(1, -1);

  return inner.slice(1, -1)
    .split('},{')
    .map((chunk) => chunk.split(',').map(Number));
}

function solution(s) {
  const result = parse(s)
    .sort((a, b) => a.length - b.length)
    .flat();
  return [...new Set(result)];
}

test('parse', () => {
  expect(parse('{{2}}')).toEqual([[2]]);
  expect(parse('{{2},{2,1}}')).toEqual([[2], [2, 1]]);
  expect(parse('{{2},{2,1},{2,1,3}}')).toEqual([[2], [2, 1], [2, 1, 3]]);
});

test('simple', () => {
  expect(solution('{{2}}')).toEqual([2]);
  expect(solution('{{2},{2,1}}')).toEqual([2, 1]);
});

test('solution', () => {
  expect(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')).toEqual([2, 1, 3, 4]);
  expect(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')).toEqual([2, 1, 3, 4]);
  expect(solution('{{20,111},{111}}')).toEqual([111, 20]);
  expect(solution('{{123}}')).toEqual([123]);
});
