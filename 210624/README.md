문제
- [콜라즈 추측](https://programmers.co.kr/learn/courses/30/lessons/12943)


1. 이해

- 입력된 수가 짝수라면 2로 나눕니다. 
- 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
- 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

- 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution
- 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환

2. 계획
일단 입력된 수를 나누고, 곱하는 함수를 만든다.
숫자가 1이 그대로 카운트를 +1만 해서 리턴한다.
count가 500을 넘어가면 -1을 리턴한다.
위 과정을 루프처럼 반복한다.

3. 실행
짝수와 홀수를 구분하여 계산해주는 함수를 만든다. 
재귀를 이용하여 num과 count(0에서부터 시작)를 변수로 받는 collatz 함수를 만든다.
-> return 값에 생성한 collatz 함수를 다시 넣으면서 count에 +1을 한다.
이때 규칙으로 num이 1이면 그대로 count를 반환하고, count가 500 이상이 되면 -1을 반환하게 한다.

4. 반성
재귀 함수 말고도 while 문으로 풀 수 있는 방법을 다른 사람의 풀이에서 보았다.
효율성 측면을 잘 고려해야겠다.