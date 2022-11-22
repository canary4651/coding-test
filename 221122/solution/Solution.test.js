function gcd(a, b) {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result = lcm(result, arr[i]);
  }
  return result;
}

test('solution', () => {
  expect(solution([2, 6, 8, 14])).toEqual(168);
});

function findGCD(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function solution1(arr) {
  return arr.reduce((a, b) => a * b / findGCD(a, b));
}

test('solution', () => {
  expect(solution1([2, 6, 8, 14])).toEqual(168);
});
