문제
- [키패드](https://programmers.co.kr/learn/courses/30/lessons/67256)

1. 이해
- 1,4,7 은 Left
- 3,6,9 는 Right
- 2,5,8,0은 둘 중 더 가까운 손가락 (동일한 거리일 때는 왼손잡이 / 오른손잡이)

- 더 가까운 거리를 찾기 위해서는 가까이에 있는 손의 위치를 알아야 한다

- 배열의 좌표를 찾는 문제
- 배열에서 손가락의 위치를 기록해야 하는 게 핵심
- 거리와 위치를 구해서 문제를 풀기

2. 계획
- 2차원 배열이 존재해야 한다. (x, y)

- 핸드폰 배열을 오브젝트를 만들어서 키패드 숫자가 키 값이 되고, value는 x,y로 표현한다.
- 주어진 값에 맞는 x,y를 기록한다. (l, r를 각각 기록한다) => 위치를 알기 위해
- 만약 1,4,7 값이 있을 때는 L을 반환하고, 3,5,9 값이 있을 때는 R을 반환한다.
- 값이 2,5,8,0 일때는 각 배열의 위치값을 알고 전 위치와 움직여야하는 위치 값의 거리를 구한다.
- 거리는 그 전 위치의 좌표와 움직이려는 위치 좌표 값들을 빼서 더한 절대값으로 알 수 있다.
- 왼손과 오른손 좌표 거리를 비교한 후, 값이 작은 값의 손을 움직인다.

3. 실행

4. 반성
- solution2에서 계속 생겼던 문제 (L하고 R이 자꾸 뒤바뀌어서 나왔음)
- 해결하기 위해 console을 하나씩 찍어봄

```js
  function pushKeypad(keyPads, result, leftPosition, rightPosition) {
    console.log(keyPads) // 문제없음
    console.log(keypads) // 문제 없음
    console.log(result) // 여기서 문제 발견! ['L', ...result] 였었음. 순서가 잘못되어서 뒤에서부터 넣어지고 있었다.

    const keypad = keyPads[0];

    if (left.includes(keypad)) {
      return pushKeypad(keyPads.slice(1), [...result, 'L'], position[keypad], rightPosition);
    }
```