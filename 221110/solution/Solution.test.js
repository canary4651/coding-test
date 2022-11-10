// 문자열 안에 문자열
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

test('solution', () => {
  expect(solution('ab6CDE443fgh22iJKlmn1o', '6CD')).toEqual(1);
  expect(solution('ppprrrogrammers', 'pppp')).toEqual(2);
});

// 제곱수 판별하기
function solution1(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

test('solution', () => {
  expect(solution1(144)).toEqual(1);
  expect(solution1(976)).toEqual(2);
});

// 세균 증식
function solution2(n, t) {
  return n * 2 ** t;
}

test('solution', () => {
  expect(solution2(2, 10)).toEqual(2048);
  expect(solution2(7, 15)).toEqual(229376);
});

// 문자열 정렬하기2
function solution3(str) {
  return String(str.toLowerCase().split('').sort().join(''));
}

test('solution3', () => {
  expect(solution3('Bcad')).toEqual('abcd');
});

// 7의 개수
function solution4(array) {
  return array.join('').split('').filter((s) => s === '7').length;
}

test('solution4', () => {
  expect(solution4([7, 77, 17])).toEqual(4);
});

// 잘라서 배열로 저장하기

function solution5(str, n) {
  const result = [];
  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }
  return result;
  // 정규식 한줄 풀이
  // str.match(new RegExp(`.{1,${n}}`, "g"));
}

test('solution', () => {
  expect(solution5('abc1Addfggg4556b', 6)).toEqual(['abc1Ad', 'dfggg4', '556b']);
});

// 중복된 숫자 개수
function solution6(arr, n) {
  return arr.filter((v) => v === n).length;
}

test('solution', () => {
  expect(solution6([1, 1, 2, 3, 4, 5], 1)).toEqual(2);
  expect(solution6([0, 2, 3, 4], 1)).toEqual(0);
});

// 머쓱이보다 키 큰 사람
function solution7(arr, height) {
  return arr.filter((v) => v > height).length;
}

test('solution7', () => {
  expect(solution7([149, 180, 192, 170], 167)).toEqual(3);
  expect(solution7([180, 120, 140], 190)).toEqual(0);
});
