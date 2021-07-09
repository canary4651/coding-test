function findPrime(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result.length;
}

function solution1(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const count = findPrime(i);

    result += count % 2 ? -i : i;
  }

  return result;
}

function solution2(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }

  return result;
}

test('find prime', () => {
  expect(findPrime(13)).toBe(2);
});

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(13, 17)).toBe(43);
    expect(solution(24, 27)).toBe(52);
  });
});
