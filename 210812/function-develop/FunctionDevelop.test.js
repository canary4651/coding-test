function getDay(progresses, speeds) {
  return progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
}

function deploy(days) {
  const [max] = days;

  const next = days.findIndex((day) => day > max);

  if (next === -1) {
    return [days.length];
  }

  return [next, ...deploy(days.slice(next))];
}

describe('deploy', () => {
  test('one deploy', () => {
    expect(deploy([5, 1, 1, 1])).toEqual([4]);
    expect(deploy([5, 1, 1])).toEqual([3]);
  });

  test('two or more deploies', () => {
    expect(deploy([5, 1, 1, 6, 2])).toEqual([3, 2]);
  });
});

function solution1(progresses, speeds) {
  const days = getDay(progresses, speeds);

  return deploy(days);
}

function getDeployDay(days) {
  let point = 0;
  const result = [];

  while (point !== -1) {
    const newPoint = days.findIndex((e) => e > days[point]);
    if (newPoint !== -1) {
      result.push(newPoint - point);
      point = newPoint;
      continue;
    }
    result.push(days.length - point);
    point = newPoint;
  }

  return result;
}

test('get deploy day', () => {
  expect(getDeployDay([5, 10, 1, 1, 20, 1])).toEqual([1, 3, 2]);
  expect(getDeployDay([7, 3, 9])).toEqual([2, 1]);
  expect(getDeployDay([6, 2, 8, 1, 4, 2, 6, 10])).toEqual([2, 5, 1]);
});

function solution2(progresses, speeds) {
  const answer = [0];

  const needDay = getDay(progresses, speeds);

  let maxDay = needDay[0];

  for (let i = 0, j = 0; i < needDay.length; i++) {
    if (needDay[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = needDay[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

test('rest of day', () => {
  expect(getDay([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
});

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);  
  })
});
