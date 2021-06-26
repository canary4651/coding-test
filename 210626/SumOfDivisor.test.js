function solution1(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  return result;
}

function solution2(number) {
  const result = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}

function solution3(number) {
  return [...new Array(number)]
    .map((_, i) => i + 1)
    .filter((x) => number % x === 0)
    .reduce((acc, cur) => acc + cur);
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(12)).toBe(28);
    expect(solution(5)).toBe(6);
  });
});
