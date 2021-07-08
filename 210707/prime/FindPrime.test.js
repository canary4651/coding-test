const { useState } = require('react');

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

// 테스트 케이스 1 실패, 효율성 실패
function solution1(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) continue;
    if (isPrime(i)) result++;
  }
  return result + 1;
}

// 에라토스테네스의 체
function solution2(n) {
  let answer = 0;
  const arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }
  return answer;
}

function solution3(n) {
  const s = new Set();

  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }

  s.add(2);

  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

test('find prime', () => {
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(1)).toBeTruthy();
  expect(isPrime(17)).toBeTruthy();
});

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(10)).toBe(4);
    expect(solution(2)).toBe(1);
  });
});
