// 가까운 수
function solution(array, n) {
  const diff = Math.min(...array.map((num) => Math.abs((num - n))));
  const result = array.sort((a, b) => a - b).find((number) => Math.abs((number - n)) === diff);
  return result;
}

test('solution', () => {
  expect(solution([3, 10, 28], 20)).toEqual(28);
  expect(solution([10, 11, 12], 13)).toEqual(12);
});

// 369 게임
function solution1(order) {
  const arr = [...String(order)];

  const result = arr.filter((n) => n === '3' || n === '6' || n === '9').length;

  return result;
}

test('solution', () => {
  expect(solution1(29423)).toEqual(2);
});

// 암호 해독
function solution2(cipher, code) {
  // code의 배수 번째 글자만 진짜 암호.
  // 배수 번째 글자만 잘라와서 합쳐주기 -> 배수 + 1 해줘야 길이가 맞음.
  const arr = cipher.split('');
  const result = arr.filter((w, i) => (i + 1) % code === 0).join('');

  return result;
}

test('solution', () => {
  expect(solution2('dfjardstddetckdaccccdegk', 4)).toEqual('attack');
});

// 대문자와 소문자
function solution3(str) {
  let result = '';

  for (const letter of str) {
    if (letter === letter.toUpperCase()) {
    		result += letter.toLowerCase();
    	} else result += letter.toUpperCase();
  }
  return result;
}

test('solution3', () => {
  expect(solution3('cccCCC')).toEqual('CCCccc');
});

function solution4(my_string) {
  const arr = my_string.split('');
  const result = arr.map((letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())).join('');
  return result;
}

test('solution4', () => {
  expect(solution4('cccCCC')).toEqual('CCCccc');
});
