// k번째수
function solution(numbers, commands) {
  const newNumbers = commands
    .map((command) => numbers.slice((command[0]) - 1, command[1]).sort((a, b) => a - b));

  return newNumbers.map((n, i) => n[commands.map((c) => c[2] - 1)[i]]);
}

test('solution', () => {
  expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
  expect(solution([1, 5, 2, 60, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 60, 3]);
});

// 가장 큰 수
function solution1(numbers) {
  const newArray = numbers.map((n) => `${n}`).sort((a, b) => (b + a) - (a + b)).join('');

  return newArray[0] === '0' ? '0' : newArray;
}

test('solution', () => {
  expect(solution1([6, 10, 2])).toEqual('6210');
});

// H-Index
function solution2(citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬

  for (let i = 0; i < citations.length; i += 1) {
    if (citations[i] < i + 1) { // h번 이상 인용된 논문이 h편 이상이 되는 지점을 찾는다
      return i;
    }
  }

  return citations.length; // 모든 논문이 h번 이상 인용된 경우}
}

test('solution', () => {
  expect(solution2([3, 0, 6, 1, 5])).toEqual(3);
});
