function changeBinary(n, arr) {
  return arr.map((v) => v.toString(2).padStart(n, 0));
}

function changeBlock(n, arr) {
  const result = changeBinary(n, arr);
  return result.map((v) => v.replace(/0/g, ' ').replace(/1/g, '#'));
}

function solution1(n, arr1, arr2) {
  const first = changeBlock(n, arr1);
  const second = changeBlock(n, arr2);

  const pad = first.map((value, i) => [...value].map((number, j) => {
    if (number === ' ' && second[i][j] === ' ') {
      return ' ';
    }
    return '#';
  }));

  return pad.map((v) => v.join(''));
}

function solution2(n, arr1, arr2) {
  const result = arr1.map((v, i) => (v | arr2[i])
    .toString(2)
    .padStart(n, 0)
    .replace(/0/g, ' ')
    .replace(/1/g, '#'));

  return result;
}

test('change binary number', () => {
  expect(changeBinary(5, [9, 20, 28, 18, 11]))
    .toStrictEqual(['01001', '10100', '11100', '10010', '01011']);
});

test('change # and blank', () => {
  expect(changeBlock(5, ['01001', '10100', '11100', '10010', '01011']))
    .toStrictEqual([' #  #', '# #  ', '###  ', '#  # ', ' # ##']);
});

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
      .toStrictEqual(['#####', '# # #', '### #', '#  ##', '#####']);
  });
});
