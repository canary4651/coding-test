function solution(membershipId) {
  const sum = membershipId
    .split('').reduce((acc, cur) => acc + Number(cur), 0);

  if (sum >= 10) {
    return solution(sum.toString());
  }
  return sum;
}

test('solution', () => {
  expect(solution('55555')).toBe(7);
});
