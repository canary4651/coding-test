// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution

function solution(number) {
  return (number % 2 === 1) ? 'Odd' : 'Even';
}

test('solution', () => {
  expect(solution(3)).toBe('Odd');
  expect(solution(4)).toBe('Even');
  expect(solution(5)).toBe('Odd');
  expect(solution(6)).toBe('Even');
});
