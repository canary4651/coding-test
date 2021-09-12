const score = { N: 0, L: 0, W: 1 };

function getWinningRate(head) {
  return Array.from(head)
    .reduce((acc, cur) => (acc += score[cur]), 0) / (head.length - head.match(/N/g).length || 1);
}

function solution1(weights, head2head) {
  return weights.map((weight, i) => ({
    i,
    weight,
    head2: head2head[i],
    beatCount: weights
      .reduce((acc, weight2, j) => (weight < weight2 && head2head[i]
        .charAt(j) === 'W' ? (acc += 1) : acc), 0),
  }))
    .sort((a, b) => {
      const [winningRateA, winningRateB] = [getWinningRate(a.head2), getWinningRate(b.head2)];
      if (winningRateA !== winningRateB) { return winningRateB - winningRateA; }

      if (a.beatCount !== b.beatCount) { return b.beatCount - a.beatCount; }

      if (a.weight !== b.weight) { return b.weight - a.weight; }

      return a.i - b.i;
    })
    .map(({ i }) => i + 1);
}

function solution2(weights, head2head) {
  return head2head.map((l, i) => l.split('').reduce((acc, v, j) => {
    acc[0] += v === 'W' ? 1 : 0;
    acc[1] += v === 'W' ? weights[i] < weights[j] ? 1 : 0 : 0;
    acc[2] += v === 'L' ? 1 : 0;
    return acc;
  }, [0, 0, 0]))
    .map((v) => [v[0] / (v[0] + v[2]), v[1]])
    .map((v, i) => [i + 1, { t: v[0], s: v[1], w: weights[i] }])
    .sort((a, b) => b[1].t - a[1].t || b[1].s - a[1].s || b[1].w - a[1].w || a[0] - b[0])
    .map((v) => v[0]);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([50, 82, 75, 120], ['NLWL', 'WNLL', 'LWNW', 'WWLN']))
      .toEqual([3, 4, 1, 2]);
  });
});
