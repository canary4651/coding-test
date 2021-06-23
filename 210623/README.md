문제
- [음양 더하기](https://programmers.co.kr/learn/courses/30/lessons/76501)


1. 이해
정수들의 절댓값을 차례대로 담은 정수 배열 absolutes
이 정수들의 부호를 차례대로 담은 불리언 배열 signs
실제 정수들의 합을 구하여 return 하도록 solution 함수

signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을,
그렇지 않으면 음수임을 의미합니다.

2. 계획
절대값의 배열 absolutes와 signs들을 하나씩 매치해서 진짜 값을 구한다.
그 후에 더한다.

3. 실행
가장 기본적인 생각: signs[i]에 따라서 1 이거나 -1을 현재 값에 곱해주는 방법이 있다.
- for문을 이용
- map으로 진짜 값을 구한 후, reduce로 더해주기
- reduce로 acc, cur, i 까지 구한 후 signs[i]에 따라 음 양을 구하고 더해주기

4. 반성
- for문이 더 익숙하지가 않아서 생각하기 힘들었다. 
- for문을 작성하다가 아니 이거 map으로 돌린 후에 reduce로 구하면 되겠네! 했는데 동료분이 파이썬의 zip 함수와 비슷하다는 이야기를 꺼내셨다. 
- reduce에서 acc + (signs[i] ? cur : -cur) => 바로 이렇게 +,- 부호를 붙이면 더 쉬워진다.
