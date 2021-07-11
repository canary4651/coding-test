문제
- [나누어 떨어지는 숫자 배열](https://programmers.co.kr/learn/courses/30/lessons/12910)

## 1. 원하는 것
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열, 하나도 없다면 배열에 -1을 담아 반환하기

## 2. 아는 것
배열 arr
disvisor 값

## 3. 조건
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 4. 계획
- divisor로 나누었을 때 0이 되는 것들을 고른다.
- 오름차순으로 정렬한다.
- 없으면 -1 을 반환하는 조건을 넣는다.