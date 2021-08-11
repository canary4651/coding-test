function solution(numbers) {
  const answer = numbers.map((v) => `${v}`)
    .sort((a, b) => (b + a) - (a + b)).join('');

  return answer[0] === '0' ? '0' : answer;
}

test('solution', () => {
  expect(solution([6, 10, 2])).toBe('6210');
  expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
});
