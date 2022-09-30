function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let number = i;

    for (let j = i + 1; j <= n; j++) {
      number += j;
      if (number === n) result++;
      else if (number > n) break;
    }
  }
  return result + 1;
}

// 재귀

function addNumber(cur, sum, n) {
  if (sum === n) return true;
  if (sum > n) return false;

  return addNumber(cur + 1, sum + cur, n);
}

function solution1(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (addNumber(i, 0, n)) result += 1;
  }
  return result;
}

// 수학적 접근: 홀수인 약수의 개수를 구하면 된다.

function solution2(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) result++;
  }
  return result;
}

test('solution', () => {
  expect(solution(15)).toEqual(4);
});

test('solution1', () => {
  expect(solution1(15)).toEqual(4);
});

test('solution2', () => {
  expect(solution2(15)).toEqual(4);
});
