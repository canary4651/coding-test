문제
- [문자열 다루기 기본](https://programmers.co.kr/learn/courses/30/lessons/12918)

1. 이해
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution

- s가 "a234"이면 False를 리턴
- "1234"라면 True를 리턴

제한 사항

- s는 길이 1 이상, 길이 8 이하인 문자열

2. 계획
- 문자안에 filter 조건으로 숫자 외 다른 문자가 있는 지 찾기 (정규 표현식)

3. 실행
- 정규표현식 (숫자일때만)과 문자열 길이 조건을 같이 넣는 방법으로 풀었다

4. 반성
- 아예 처음부터 정규식 표현만해서 숫자 4, 숫자 6으로 쪼개는 방법이 있었다
- !isNan()을 사용할 수도 있었는데, 지금은 지수를 넣으면 안된다고 한다.