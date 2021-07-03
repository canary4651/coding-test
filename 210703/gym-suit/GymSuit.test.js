function isEqual(n, lost, reserve) {
  const arr = [...new Array(n + 1).keys()].slice(1);
  const difference = arr.filter((x) => !lost.includes(x) && !reserve.includes(x));

  return difference.length;
}

function solution1(n, lost, reserve) {
  return n - lost.filter(a => {
    const fortAndBack = reserve.find(r => Math.abs(r - a) <= 1);

    if (!fortAndBack) {
      return true;
    }

    reserve = reserve.filter(r => r !== fortAndBack);
  }).length;
}

function solution2(n, lost, reserve) {
  const students = new Array(n).fill(1);
  reserve.forEach(i => {
    students[i - 1] += 1;
  });

  lost.forEach(i => {
    students[i - 1] -= 1;
  });

  students.forEach((a, i) => {
    if (a === 0) {
      if (students[i - 1] === 2) {
        students[i - 1] -= 1;
        students[i] = 1;
      } else if (students[i + 1] === 2) {
        students[i + 1] -= 1;
        students[i] = 1;
      }
    }
  });

  const answer = students.filter(i => i).length;

  return answer;
};

function solution3(n, lost, reserve) {
  const noGymSuit = lost.reduce((acc, cur) => {
    const borrow = reserve.find((a) => Math.abs(a - cur) <= 1);

    if (!borrow) return [...acc, borrow];

    reserve = reserve.filter((a) => a !== borrow);
    return acc;
  }, []);

  return n - noGymSuit.length;
};

test('isEqual', () => {
  expect(isEqual(5, [2, 4], [3]))
    .toBe(2);
  expect(isEqual(5, [2, 4], [1, 3, 5]))
    .toBe(0);
});

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(5, [2, 4], [1, 3, 5]))
      .toBe(5);
    expect(solution(5, [2, 4], [3]))
      .toBe(4);
  });
});
