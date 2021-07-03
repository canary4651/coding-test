function solution(numbers, target) {
  const result = [];

  function go(i, sum) {
    if (i === numbers.length) {
      return result.push(sum);
    }

    go(i + 1, sum + numbers[i]);
    go(i + 1, sum - numbers[i]);
  }
  go(0, 0);

  return result.filter((x) => x === target).length;
}

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});
