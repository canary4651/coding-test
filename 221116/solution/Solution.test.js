// 치킨 쿠폰
function solution(chicken) {
  // 쿠폰 10장이 모이면 치킨 한마리 서비스 + 쿠폰 한 개 제공
  // 시켜먹은 치킨의 수가 주어질 때 받을 수 있는 최대 서비스 치킨 수
  let coupon = chicken;
  let service = 0;
  while (coupon >= 10) {
    service += coupon / 10 << 0;
    coupon = coupon % 10 + coupon / 10 << 0;
  }
  return service;
}

test('solution', () => {
  expect(solution(100)).toEqual(11);
});

// 이진수 더하기
function solution1(bin1, bin2) {
  const sum = +parseInt(bin1, 2).toString(10) + +parseInt(bin2, 2).toString(10);
  return sum.toString(2);
}

test('solution', () => {
  expect(solution1('10', '11')).toEqual('101');
});

// A로 B 만들기
function solution2(before, after) {
  before = [...before].sort();
  after = [...after].sort();
  return before.filter((w, i) => w === after[i]).length === after.length ? 1 : 0;
}

test('solution', () => {
  expect(solution2('olleh', 'hello')).toEqual(1);
  expect(solution2('allpe', 'apple')).toEqual(0);
});

// k의 개수
function solution3(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    count += [...(`${num}`)].filter((n) => +n === k).length;
  }
  return count;
}

test('solution3', () => {
  expect(solution3(1, 13, 1)).toEqual(6);
});
