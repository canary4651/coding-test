function solution(board, moves) {
  const basket = [];
  const result = 0;

  return 4;
}

function grap(board, order) {
}

// test를 더 잘게 쪼개자. (grap도 테스트 해야함)

test('solution', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  const moves = [1, 5, 3, 5, 1, 2, 1, 4];

  expect(solution(board, moves)).toBe(4);
});
