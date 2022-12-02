function solution(ingredient) {
  const hamburger = [];
  let count = 0;

  ingredient.forEach((food) => {
    hamburger.push(food);

    if (hamburger.length >= 4) {
      const order = hamburger.slice(-4).join('');

      if (order === '1231') {
        for (let i = 0; i < 4; i++) {
          hamburger.pop();
        }
        // hamburger.pop();
        // hamburger.pop();
        // hamburger.pop();
        // hamburger.pop();

        count++;
      }
    }
  });

  return count;
}

test('solution', () => {
  expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toEqual(2);
  expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toEqual(0);
});

function solution1(ingredient) {
  const hamburger = [];
  let result = 0;

  for (let i = 0; i < ingredient.length; i++) {
    hamburger.push(ingredient[i]);

    if (hamburger.length >= 4) {
      const order = hamburger.slice(-4).join('');

      if (order === '1231') {
        for (let i = 0; i < 4; i++) {
          hamburger.pop();
        }

        result++;
      }
    }
  }

  return result;
}

test('solution', () => {
  expect(solution1([2, 1, 1, 2, 3, 1, 2, 3, 1])).toEqual(2);
  expect(solution1([1, 3, 2, 1, 2, 1, 3, 1, 2])).toEqual(0);
});
