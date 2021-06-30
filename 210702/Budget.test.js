function solution1(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

  return d.length;
}

function solution2(d, budget) {
  let result = 0;
  d.sort();

  d.reduce((acc, cur) => {
    acc + cur <= budget ? result++ : result;
    return acc + cur;
  }, 0);

  return result;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(solution([2, 2, 3, 3], 10)).toBe(4);
  });
});
