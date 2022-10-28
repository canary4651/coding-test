// 영어가 싫어요
function solution(numbers) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const regex = new RegExp(Object.keys(dict).join('|'), 'g');

  const result = +numbers.replace(regex, (index) => dict[index]);

  return result;
}

test('solution', () => {
  expect(solution('onetwothreefourfivesixseveneightnine')).toEqual(123456789);
});

// 인덱스 바꾸기
function solution1(string, num1, num2) {
  const arr = string.split('');

  const tmp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = tmp;

  return arr.join('');
}

test('solution', () => {
  expect(solution1('hello', 1, 2)).toEqual('hlelo');
});

// 한 번만 등장한 문자
function solution2(s) {
  return s.split('').filter((w) => s.match(new RegExp(w, 'g')).length < 2).sort().join('');
}

test('solution', () => {
  expect(solution2('abcabcadc')).toEqual('d');
});

// 약수 구하기
function solution3(n) {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}

test('solution3', () => {
  expect(solution3(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
});
