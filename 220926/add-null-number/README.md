문제
- [없는 숫자 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/86051)

## 1. 원하는 것

- numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 리턴하는 함수

## 2. 아는 것

- 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers

## 3. 조건

- 1 ≤ numbers의 길이 ≤ 9
  - 0 ≤ numbers의 모든 원소 ≤ 9
  - numbers의 모든 원소는 서로 다릅니다.

## 4. 계획
1. numbers에서 없는 수를 filter를 걸어 찾아낸다.
2. 찾아낸 숫자들끼리 더한다.