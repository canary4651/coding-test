# 완전탐색법 문제 풀이

- [완전탐색법](https://possible-oatmeal-64f.notion.site/22ec8d9f20864d52b83fca5ecd4b3d6f)


문제
- [two-sum](https://leetcode.com/problems/two-sum/)

- [소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)
## 1. 원하는 것

## 2. 아는 것

## 3. 조건

## 4. 계획

오류가 있던 초기의 문제 풀이

```js
// function isPrime(num) {
//   // i += 1 은 i++와 같지만, 더 직관적 명시적이다.
//   if (num === 1) return false; // 소수가 아님.

//   for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generateCandidates(numbers) {
  // const answer = [];  "1", "7", "17", "71"

  // 후보 숫자의 길이가 1인 경우
  // for (let i = 0; i < numbers.length; i += 1) {
  // answer.push(numbers[i]);
  // }

  // 후보 숫자의 길이가 2인 경우
  // for (let i = 0; i < numbers.length; i += 1) {
  //   for (let j = i + 1; j < numbers.length; j += 1) {
  //     answer.push(numbers[i] + numbers[j]);
  //   }
  // }

  // 문제! 후보 숫자의 길이가 너무 길다면...? -> 그래서 재귀로 푸는 게 편하다.
  // 재귀의 특징. 내 것만 하고 나머진 너가 알아서해.
  // return [number, ...generateCandidates(nextNumbers)];
  const anwers = new Set();

  // index = -1 이라는 게, i가 index가 아니라는 말이다. -1이든 -100이든 큰 상관없지만 0이거나 1이상은 안됨.
  function collect(length, index = -1, word = '') {
    if (word.length > length) {
      return;
    }

    if (word.length === length) {
      anwers.add(Number(word));
    }

    for (let i = 0; i < numbers.length; i += 1) {
      if (i !== index) {
        collect(length, i, word + numbers[i]);
      }
    }
  }

  for (let i = 1; i <= numbers.length; i += 1) {
    collect(i);
  }

  return [...anwers];
}

function solution1(numbers) {
  const candidates = generateCandidates(numbers);
  const primes = [];

  // candidates 들을 어떻게 구할까? numbers에서!

  for (candidate of candidates) {
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes.length;
}
```