function solution1(arr1, arr2) {
  return arr1.map((arr, y) => arr.map((value, x) => value + arr2[y][x]));
}

function solution2(arr1, arr2) {
  return [...Array(arr1.length)].map((_, y) => (
    [...Array(arr1[0].length)].map((_, x) => arr1[y][x] + arr2[y][x])
  ));
}

test('solution', () => {
  const arr1 = [[1, 2], [2, 3]];
  const arr2 = [[3, 4], [5, 6]];
  const arr3 = [[1, 2]];
  const arr4 = [[3, 4]];

  [solution1, solution2].forEach((solution) => {
    expect(solution(arr1, arr2)).toStrictEqual([[4, 6], [7, 9]]);
    expect(solution(arr3, arr4)).toStrictEqual([[4, 6]]);
  });
});
