function fail(N, stages) {
  return [...new Array(N)].map((_, i) => {
    const totalPlayer = stages.length;
    stages = stages.filter((v) => v > i + 1);
    return { i: i + 1, f: (totalPlayer - stages.length) / totalPlayer };
  });
}

function solution(N, stages) {
  return fail(N, stages)
    .sort((a, b) => (
      a.f === b.f ? a.i - b.i : b.f - a.f
    )).map((v) => v.i);
}

test('fail', () => {
  const failure = [
    { i: 1, f: 0.125 },
    { i: 2, f: 0.42857142857142855 },
    { i: 3, f: 0.5 },
    { i: 4, f: 0.5 },
    { i: 5, f: 0 }];

  expect(fail(5, [2, 1, 2, 6, 2, 4, 3, 3])).toStrictEqual(failure);
});

test('solution', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
});
