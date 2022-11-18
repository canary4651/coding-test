// 문자열 밀기
function solution(A, B) {
  // if (A === B) return 0;

  // for (let i = 0; i < A.length; i++) {
  //   A = A.slice(-1) + A.slice(0, -1);
  //   if (A === B) return i + 1;
  // }
  // return -1;
  return (B + B).indexOf(A);
}

test('solution', () => {
  expect(solution('hello', 'ohell')).toEqual(1);
  expect(solution('hello', 'elloh')).toEqual(4);
});

// 종이 자르기
function solution1(M, N) {
  return M * N - 1;
}

test('solution', () => {
  expect(solution1(2, 2)).toEqual(3);
});

// 연속된 수의 합
function solution2(num, total) {
  // const numList = Array.from({ length: num }, (_, i) => i);
  // const sum = numList.reduce((acc, cur) => acc + cur);
  // return numList.map((n) => n - (sum - total) / num);

  const min = Math.ceil(total / num - Math.floor(num / 2));

  return new Array(num).fill(0).map((_, i) => i + min);
}

test('solution', () => {
  expect(solution2(3, 12)).toEqual([3, 4, 5]);
});

// 다음에 올 숫자
function solution3(c) {
  // 등차수열 혹은 등비수열 다음의 숫자
  // 등차수열 (인덱스를 비교해서 차가 같으면 등차수열)
  if (c[2] - c[1] === c[1] - c[0]) {
    return c.pop() + c[1] - c[0];
  }
  return c.pop() * (c[1] / c[0]);
}

test('solution3', () => {
  expect(solution3([1, 2, 3, 4])).toEqual(5);
});
