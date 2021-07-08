문제
- [숫자 문자열과 영단어](https://programmers.co.kr/learn/courses/30/lessons/81301)

## 1. 원하는 것
영단어로 바뀐 자리수를 다시 숫자로 찾기

## 2. 아는 것

| 숫자 | 영단어 |
|--|--|
0 |	zero
1	| one
2	| two
3	| three
4	| four
5	| five
6	| six
7	| seven
8	| eight
9	| nine

## 3. 조건
- 1 ≤ s의 길이 ≤ 50
- s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

## 4. 계획
- 방법 1: for문을 돌려서 숫자가 나오면 그대로 두고, 문자가 나오면 숫자로 대치되게 만든다. 

- 방법 2: replace와 문자열을 바꾸는 정규표현식을 이용해서 0부터 9까지 다 돌려주고, 숫자화 시킨다(number함수)