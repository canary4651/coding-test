function divide(num) {
  const result = num % 2;
  return result === 0 ? num / 2 : num * 3 + 1;
}

function collatz(num, count = 0) {
  if (num === 1) {
    return count;
  }

  if (count === 500) {
    return -1;
  }

  const number = divide(num);

  return collatz(number, count + 1);
}

function solution(num) {
  return collatz(num, 0);
}

test('if even, divide by 2', () => {
  expect(divide(6)).toBe(3);
});

test('if odd multiply by 3 and add 1', () => {
  expect(divide(5)).toBe(16);
});

test('if number is 1, return count', () => {
  expect(collatz(6, 0)).toBe(8);
});

test('if count is over 500, return -1', () => {
  expect(collatz(626331, 0)).toBe(-1);
});

test('solution', () => {
  expect(solution(6)).toBe(8);
});
