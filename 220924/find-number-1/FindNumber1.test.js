function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution(10)).toEqual(3);
  expect(solution(12)).toEqual(11);
});
