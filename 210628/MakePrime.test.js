function isPrime(numbers) {
  if (numbers === 2) {
    return true;
  }

  for (let i = 2; i <= numbers / 2; i++) {
    if (numbers % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  let result = 0;
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = numbers[i] + numbers[j] + numbers[k];
        if (isPrime(sum)) {
          result++;
        }
      }
    }
  }
  return result;
}

test('find prime', () => {
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(1)).toBeTruthy();
  expect(isPrime(17)).toBeTruthy();
});

test('solution', () => {
  expect(solution([1, 2, 3, 4])).toBe(1);
  expect(solution([1, 2, 7, 6, 4])).toBe(4);
});
