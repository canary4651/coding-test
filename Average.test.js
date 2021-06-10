// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, soultion을 완성해라

function solution(numbers) {
  return numbers.reduce((a, b) => (a + b)) / numbers.length;
}

test('solution', () => {
  expect(solution([1, 2, 3, 4])).toBe(2.5);
  expect(solution([5, 5])).toBe(5);
});
