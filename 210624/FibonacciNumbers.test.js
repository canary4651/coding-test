function solution1(num) {
  if (num < 2) return num;

  return solution1(num - 1) + solution1(num - 2);
}

function solution2(n) {
  const numbers = [...new Array(n)];

  const result = numbers.reduce((acc) => {
    const a = acc[0];
    const b = acc[1] % 1234567;

    return [b, a + b];
  }, [0, 1]);

  return result[0];
}

function solution3(n) {
  let cur = 1;
  let next = 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    cur = next;
    next = answer;
    answer = (next + cur) % 1234567;
  }

  return answer;
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(3)).toBe(2);
  });
});
