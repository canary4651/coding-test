문제
- [피보나치](https://programmers.co.kr/learn/courses/30/lessons/12945)


1. 이해
피보나치 수는 F(0) = 0, F(1) = 1일 때,
1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를 들어
F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수

2. 계획

3. 실행

4. 반성
재귀는 시간 효율이 떨어진다.
여러 방법으로 풀 수 있는데, for문을ㄹ 익숙하게 하도록 익히자.