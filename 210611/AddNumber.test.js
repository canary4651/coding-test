function solution1(number) {
  return [...String(number)].reduce((acc, cur) => (
    acc + parseInt(cur)
  ), 0);
}

function solution2(number) {
  return number.toString().split('').reduce((acc, cur) => (
    acc + parseInt(cur)
  ), 0);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(123)).toBe(6);
    expect(solution(987)).toBe(24);
  });
});
