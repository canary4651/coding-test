function solution1(s) {
  let count = 0;

  while (s !== '1') {
    s = (([...s].filter((i) => i !== '0')).length).toString(2);

    count += 1;
  }

  return count;
}

function solution2(s) {
  let zeroCount = 0;

  while (s !== '1') {
    zeroCount += [...s].filter((i) => i === '0').length;

    s = (([...s].filter((i) => i !== '0')).length).toString(2);
  }
  return zeroCount;
}

function solution(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== '1') {
    zeroCount += [...s].filter((i) => i === '0').length;

    s = (([...s].filter((i) => i !== '0')).length).toString(2);

    count += 1;
  }

  return [count, zeroCount];
}

function solution3(s, count = 0, zeroCount = 0) {
  if (s === '1') {
    return [count, zeroCount];
  }

  return solution3(
    (([...s].filter((i) => i !== '0')).length).toString(2),
    count + 1,
    zeroCount + [...s].filter((i) => i === '0').length,
  );
}

test('count binary state solution', () => {
  expect(solution1('1')).toEqual(0);
  expect(solution1('11')).toEqual(2);
  expect(solution1('01110')).toEqual(3);
});

test('count disappear 0 solution', () => {
  expect(solution2('1')).toEqual(0);
  expect(solution2('11')).toEqual(1);
  expect(solution2('01110')).toEqual(3);
  expect(solution2('110010101001')).toEqual(8);
});

test('all solution', () => {
  expect(solution('110010101001')).toEqual([3, 8]);
  expect(solution('01110')).toEqual([3, 3]);
});

test('solution3', () => {
  expect(solution3('110010101001')).toEqual([3, 8]);
  expect(solution3('01110')).toEqual([3, 3]);
});
