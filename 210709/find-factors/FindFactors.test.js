function findSmallPrime(s) {
  const result = [];

  for (let i = 1; i <= s; i++) {
    if (s % i === 0) {
      result.push(i);
    }
  }
  return result;
}

function solution(n, m) {
  const common = findSmallPrime(n)
    .filter((x) => findSmallPrime(m).includes(x))
    .pop();

  const gcm = n * m / common;

  return [common, gcm];
}

test('find prime', () => {
  expect(findSmallPrime(13)).toStrictEqual([1, 13]);
});

test('solution', () => {
  expect(solution(3, 12)).toStrictEqual([3, 12]);
  expect(solution(2, 5)).toStrictEqual([1, 10]);
});
