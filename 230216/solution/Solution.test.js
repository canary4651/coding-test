function solution(n) {
let result = 0;

  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      for (let k = j + 1; k < n.length; k++) {
        if (n[i] + n[j] + n[k] === 0) {
          result++;
        }
      }
    }
  }
  return result;
}

test('solution', () => {
  expect(solution([-2, 3, 0, 2, -5])).toEqual(2);
});
