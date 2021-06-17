const RANK = [6, 6, 5, 4, 3, 2, 1];

function same(lottos, winNumbers) {
  return lottos.filter((v) => winNumbers.includes(v)).length;
}

function unVisible(lottos) {
  return lottos.filter((v) => v === 0).length;
}

function lowRank(lottos, winNumbers) {
  return RANK.filter((v, i) => i === same(lottos, winNumbers)).pop();
}

function highRank(lottos, winNumbers) {
  const numbers = same(lottos, winNumbers) + unVisible(lottos);
  return RANK.filter((v, i) => i === numbers).pop();
}

function solution1(lottos, winNumbers) {
  return [highRank(lottos, winNumbers), lowRank(lottos, winNumbers)];
}

function solution2(lottos, winNumbers) {
  const winCount = lottos.filter((v) => winNumbers.includes(v)).length;
  const zeroCount = lottos.filter((v) => v === 0).length;
  const numbers = winCount + zeroCount;

  const minRank = () => RANK.filter((v, i) => i === winCount).pop();
  const maxRank = () => RANK.filter((v, i) => i === numbers).pop();

  return [maxRank(lottos, winNumbers), minRank(winNumbers)];
}

test('count same number', () => {
  expect(same([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toBe(2);
});

test('count unvisible number', () => {
  expect(unVisible([44, 1, 0, 0, 31, 25])).toBe(2);
});

test('match low rank', () => {
  expect(lowRank([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toBe(5);
});

test('match high rank', () => {
  expect(highRank([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toBe(3);
});

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([3, 5]);
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 2])).toEqual([1, 6]);
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual([1, 1]);
  });
});
