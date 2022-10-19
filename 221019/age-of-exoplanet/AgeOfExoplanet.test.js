function solution(age) {
  return [...String(age)]
    .map((num) => String.fromCharCode('a'.charCodeAt(0) + +num))
    .join('');
}

test('solution', () => {
  expect(solution(23)).toEqual('cd');
});
