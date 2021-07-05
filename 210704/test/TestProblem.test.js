function solution(v) {
  const answer = [];

  for (let i = 0; i < 2; i++) {
    if (v[0][i] === v[1][i]) {
      answer[i] = v[2][i];
    } else if (v[0][i] === v[2][i]) {
      answer[i] = v[1][i];
    } else if (v[1][i] === v[2][i]) {
      answer[i] = v[0][i];
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution([[1, 4], [3, 4], [3, 10]])).toStrictEqual([1, 10]);
});
