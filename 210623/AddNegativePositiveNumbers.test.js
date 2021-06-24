function solution1(absolutes, signs) {
  return absolutes.map((v, i) => (signs[i] ? 1 : -1) * v)
    .reduce((acc, cur) => acc + cur, 0);
}

function solution2(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    result = signs[i] ? result += absolutes[i] : result -= absolutes[i];
  }
  return result;
}

function solution3(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (cur) * (signs[i] ? 1 : -1), 0);
}

function solution4(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}

function solution5(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => (signs[i] ? acc + cur : acc - cur), 0);
}

test('solution', () => {
  [solution1, solution2, solution3, solution4, solution5].forEach((solution) => {
    expect(solution([4, 7, 12], [true, false, true])).toBe(9);
  });
});
