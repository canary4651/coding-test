function split(numbers) {
  return numbers.length / 2;
}

function removeDuplicate(numbers) {
  return [...new Set(numbers)];
}

function solution(numbers) {
  const max = split(numbers);
  const result = removeDuplicate(numbers);
  return result.length > max ? max : result.length;
}

test('remove dulpicate numbers', () => {
  expect(removeDuplicate([3, 1, 2, 3])).toStrictEqual([3, 1, 2]);
  expect(removeDuplicate([3, 3, 3, 2, 2, 4])).toStrictEqual([3, 2, 4]);
  expect(removeDuplicate([3, 3, 3, 2, 2, 2])).toStrictEqual([3, 2]);
});

test('solution', () => {
  expect(solution([3, 1, 2, 3])).toBe(2);
});
