// 1. 먼저 이진법으로 변환을 해보자.
// 2. n의 다음 숫자를 증가시키고 이진법으로 변환시키자.
// 3. 1의 개수를 세자. -> 이 조건이 있어야 break를 걸 수 있음

function countBinary(n) {
  const binary = n.toString(2);
  const countOne = binary.match(/1/gi).length;
  return countOne;
}

function solution(n) {
  let result = 0;
  result = countBinary(n);

  while (1) {
    if (countBinary(++n) === result) {
      return n;
    }
  }
  return n;
}

// 재귀
function solution2(n, next = n + 1) {
  return n.toString(2).match(/1/gi).length === next.toString(2).match(/1/gi).length
    ? next : solution(n, next + 1);
}

function solution3(n) {
  const one = n.toString(2).match(/1/gi).length;

  while (true) {
    n++;
    if (n.toString(2).match(/1/gi).length === one) { return n; }
  }
}

function solution4(n) {
  const one = n.toString(2).match(/1/gi).length;

  while (n++) {
    if (n.toString(2).match(/1/gi).length === one) { return n; }
  }
}

test('countBinary', () => {
  expect(countBinary(78)).toEqual(4);
});

test('solution', () => {
  expect(solution(78)).toEqual(83);
  expect(solution(15)).toEqual(23);
});

test('solution2', () => {
  expect(solution2(78)).toEqual(83);
});

test('solution3', () => {
  expect(solution3(78)).toEqual(83);
});

test('solution4', () => {
  expect(solution3(78)).toEqual(83);
});
