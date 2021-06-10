// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution

function solution1(phoneNumber) {
  return phoneNumber.replace(/\d(?=\d{4})/g, '*');
}

function solution2(phoneNumber) {
  const result = '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);
  return result;
}

function solution3(phoneNumber) {
  const last = phoneNumber.slice(-4);
  const result = last.padStart(phoneNumber.length, '*');
  return result;
}

function solution4(phoneNumber) {
  return [...phoneNumber].fill('*', 0, phoneNumber.length - 4).join('');
}

test('solution', () => {
  [solution1, solution2, solution3, solution4].forEach((solution) => {
    expect(solution('01033334444')).toBe('*******4444');
    expect(solution('027778888')).toBe('*****8888');
  });
});
