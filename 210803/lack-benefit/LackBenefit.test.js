function solution(price, money, count) {
  const countArry = [...new Array(count)].map((_, i) => i + 1);
  const total = [...countArry].reduce((acc, cur) => acc + (cur * price), 0);
  const result = total - money;

  return result >= 0 ? result : 0;
}

test('solution', () => {
  expect(solution(3, 20, 4)).toBe(10);
});
