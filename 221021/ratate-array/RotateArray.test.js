function solution(numbers, direction) {
  direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
  return numbers;
}

// 오른쪽이면 배열들의 요소 위치를 +1씩 이동오른쪽으로 한칸씩 이동
// 왼쪽이면 배열들의 요소를 왼쪽으로 한칸씩 이동

test('solution', () => {
  expect(solution([1, 2, 3], 'right')).toEqual([3, 1, 2]);
  expect(solution([4, 455, 6, 4, -1, 45, 6], 'left')).toEqual([455, 6, 4, -1, 45, 6, 4]);
});
