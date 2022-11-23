function solution(people, limit) {
  people.sort((a, b) => b - a);

  let result = 0;
  let start = 0;
  let end = people.length - 1;

  while (start < end) {
    if (people[start] + people[end] > limit) {
      start += 1;
    } else {
      start += 1;
      end -= 1;
    }
    result += 1;
  }

  return start === end ? result + 1 : result;
}

test('solution', () => {
  expect(solution([70, 50, 80, 50], 100)).toEqual(3);
  expect(solution([70, 50, 80], 100)).toEqual(3);
});

function solution1(people, limit) {
  let result = 0;

  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    result++;
  }

  return result;
}

test('solution', () => {
  expect(solution1([70, 50, 80, 50], 100)).toEqual(3);
  expect(solution1([70, 50, 80], 100)).toEqual(3);
});
