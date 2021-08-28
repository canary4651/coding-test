문제
- [직업군 추천](https://programmers.co.kr/learn/courses/30/lessons/84325)

## 1. 원하는 것
- 개발자가 사용하는 언어의 언어 선호도 x 직업군 언어 점수의 총합이 가장 높은 직업군을 반환하는 함수
- 총합이 같은 직업군이 여러 개일 경우, 이름이 사전 순으로 가장 빠른 직업군을 return 

## 2. 아는 것
1. 직업군 언어 점수를 정리한 문자열 배열 table,
2. 개발자가 사용하는 언어를 담은 문자열 배열 languages,
3. 언어 선호도를 담은 정수 배열 preference
## 3. 조건
- table의 길이 = 5
    - table의 원소는 "직업군 5점언어 4점언어 3점언어 2점언어 1점언어"형식의 문자열입니다. 직업군, 5점언어, 4언어, 3점언어, 2점언어, 1점언어는 하나의 공백으로 구분되어 있습니다.
- table은 모든 테스트케이스에서 동일합니다.
- 1 ≤ languages의 길이 ≤ 9
- languages의 원소는 "JAVA", "JAVASCRIPT", "C", "C++" ,"C#" , "SQL", "PYTHON", "KOTLIN", "PHP" 중 한 개 이상으로 이루어져 있습니다.
- languages의 원소는 중복되지 않습니다.
- preference의 길이 = languages의 길이
- 1 ≤ preference의 원소 ≤ 10
- preference의 i번째 원소는 languages의 i번째 원소의 언어 선호도입니다.
- return 할 문자열은 "SI", "CONTENTS", "HARDWARE", "PORTAL", "GAME" 중 하나입니다.
## 4. 계획
배열에서 언어와 직업군을 찾아내기