function solution1(brown, yellow) {
  let yellowWidth;
  let yellowHeight;

  for (let i = 1; i <= yellow; i++) {
    if (i + (yellow / i) === (brown - 4) / 2) {
      yellowWidth = i;
      yellowHeight = yellow / i;
    }
  }
  return [yellowWidth + 2, yellowHeight + 2];
}

function solution2(brown, yellow) {
  const result = [];
  const sum = brown + yellow;

  for (let h = 3; h <= brown; h++) {
    if (sum % h === 0) {
      const w = sum / h;

      if ((h - 2) * (w - 2) === yellow) {
        return [w, h];
      }
    }
  }

  return result;
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(10, 2)).toEqual([4, 3]);
    expect(solution(8, 1)).toEqual([3, 3]);
    expect(solution(24, 24)).toEqual([8, 6]);
  });
});
