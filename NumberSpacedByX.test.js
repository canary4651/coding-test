// 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴

function solution1(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  return result;
}

function solution2(x, n) {
  return [...new Array(n)].map((_, i) => x * (i + 1));
}

function solution3(x, n) {
  return Array(n).fill(x).map((v, i) => v * (i + 1));
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
    expect(solution(4, 3)).toStrictEqual([4, 8, 12]);
  });
});
