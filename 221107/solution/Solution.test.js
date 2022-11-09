// 숫자찾기
function solution(num, k) {
  const arr = String(num).split('');
  const index = arr.findIndex((n) => n === String(k));
  return index === -1 ? -1 : index + 1;
}

test('solution', () => {
  expect(solution(29183, 1)).toEqual(3);
});

// n의 배수 고르기
function solution1(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}

test('solution', () => {
  expect(solution1(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual([6, 9, 12]);
});

// 자릿수 더하기
function solution2(n) {
  const arr = String(n).split('');
  return arr.reduce((acc, cur) => +acc + +cur, 0);
}

test('solution', () => {
  expect(solution2(1234)).toEqual(10);
  expect(solution2(930211)).toEqual(16);
});

// OX퀴즈
function solution3(quiz) {
  return quiz.map((v) => {
    const [formula, result] = v.split('=');
    return eval(formula) === +result ? 'O' : 'X';
  });
}

test('solution3', () => {
  expect(solution3(['3 - 4 = -3', '5 + 6 = 11'])).toEqual(['X', 'O']);
});
