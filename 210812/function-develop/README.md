문제
- [기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 1. 원하는 것
각 배포마다 몇 개의 기능이 배포되는 지 리턴하기
## 2. 아는 것
- 배포는 진도가 100%를 넘어야만 가능하다.
- 배포는 앞에 있는 기능이 배포가 되어야만 뒤에 있는 기능도 배포된다.
- 진도는 앞 뒤 상관없이 먼저 끝날 수 있다. (대신 앞의 기능을 기다려야함)
## 3. 조건
- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
    - 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
## 4. 계획
1. progresses 배열와 speeds 배열 인덱스를 통해 진도율을 채울 수 있는 요일 구하기.
    - 100 - progress[i] < speeds[i] * 요일 이라고 할 때 요일 값 배열 생성
2. 