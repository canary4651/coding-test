문제
- [다음 큰 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/12911)

## 1. 원하는 것
- 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수

## 2. 아는 것
- 자연수 n

## 3. 조건
- 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
- 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
- 조건 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수 입니다.
- ex)  78(1001110)의 다음 큰 숫자는 83(1010011) => 둘 다 1의 개수가 4개

## 4. 계획
- n과 그 다음 수들을 이진법으로 변환한다
- 변환된 이진법의 개수를 이진법 n의 개수와 비교한다
- 이것도 재귀로 할 수 있겠는데?