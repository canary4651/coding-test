function getGrade(scores) {
  const avg = scores.map((v) => {
    if (v >= 90) {
      return 'A';
    }

    if (v >= 80) {
      return 'B';
    }

    if (v >= 70) {
      return 'C';
    }
    if (v >= 50) {
      return 'D';
    }

    return 'F';
  });

  return avg.toString().replaceAll(',', '');
}

function changePosition(scores) {
  return scores[0].map((_, column) => scores
    .map((row) => row[column]));
}

function solution(scores) {
  const avg = changePosition(scores)
    .map((s, i) => [...s.splice(i, 1), s])
    .map(([myScore, s]) => (Math.min(...s) <= myScore && myScore <= Math.max(...s)
      ? [myScore, ...s]
      : s))
    .map((s) => s.reduce((acc, cur) => acc + cur, 0) / s.length);

  return getGrade(avg);
}

test('change number to grade', () => {
  expect(getGrade([100, 90, 98, 88, 65])).toBe('AAABD');
  expect(getGrade([50, 45, 99, 85, 77])).toBe('DFABC');
});

test('change column to row', () => {
  expect(changePosition(
    [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77],
      [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]],
  )).toEqual(
    [[100, 50, 47, 61, 24], [90, 45, 88, 57, 90],
      [98, 99, 95, 100, 94], [88, 85, 80, 80, 75], [65, 77, 67, 65, 65]],
  );
});

test('solution', () => {
  expect(solution(
    [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77],
      [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]],
  ))
    .toBe('FBABD');
});
