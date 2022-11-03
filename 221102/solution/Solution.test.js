// 편지
function solution(message) {
  return message.split('').length * 2;
}

test('solution', () => {
  expect(solution('happy birthday!')).toEqual(30);
  expect(solution('I love you~')).toEqual(22);
});

// 가장 큰 수 찾기
function solution1(array) {
  // sort() 하면 기존 array의 배열이 변경된다.
  let maxArray = array.slice();
  maxArray = maxArray.sort((a, b) => b - a);
  const maxIndex = array.findIndex((v) => v === maxArray[0]);
  return [maxArray[0], maxIndex];
}

test('solution', () => {
  expect(solution1([1, 8, 3])).toEqual([8, 1]);
  expect(solution1([9, 10, 11, 8])).toEqual([11, 2]);
});

// 문자열 계산하기
function solution2(my_string) {
  return eval(my_string);
}

test('solution', () => {
  expect(solution2('3 + 4')).toEqual(7);
});

// 배열의 유사도
function solution3(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}

test('solution3', () => {
  expect(solution3(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])).toEqual(2);
});
