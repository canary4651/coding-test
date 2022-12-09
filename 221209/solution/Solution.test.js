function solution(s) {
  const preWords = [];
  const result = [];

  for (let i = 0; i < s.length; i += 1) {
    let count = 0;

    if (!preWords.includes(s[i])) {
      preWords.push(s[i]);
      result.push(-1);
      continue;
    }

    for (let j = i - 1; j >= 0; j--) {
      count++;
      if (s[i] === s[j]) {
        result.push(count);
        break;
      }
    }
  }
  return result;
}

test('solution', () => {
  expect(solution('banana')).toEqual([-1, -1, -1, 2, 2, 2]);
});
