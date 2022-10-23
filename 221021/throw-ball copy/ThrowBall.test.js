function solution(numbers, k) {
  let ball = 1;

  for (let i = 0; i < k - 1; i++) {
    ball += 2;

    if (ball > numbers.length - 1) {
      ball -= numbers.length;
    }
  }
  return ball;
}

function solution1(numbers, k) {
  const goNext = (current) => (current + 2) % numbers.length;

  let current = 0;

  for (let i = 0; i < k - 1; i++) {
    current = goNext(current);
  }

  return numbers[current];
}

test('solution', () => {
  expect(solution([1, 2, 3, 4], 2)).toEqual(3);
});

test('solution1', () => {
  expect(solution1([1, 2, 3, 4], 2)).toEqual(3);
});
