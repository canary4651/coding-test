function solution1(string) {
  const number = string.length;
  const regex = /^[0-9]+$/; 

  return number === 4 || number === 6 ? regex.test(string) : false;
}

function solution2(string) {
  const regex = /^\d{4}$|^\d{6}$/; 

  return regex.test(string);
}

function solution3(string) {
  const number = string.length;

  return number === 4 || number === 6 ? !isNaN(string) : false;
}


test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution('a234')).toBeFalsy();
    expect(solution("1234")).toBeTruthy();
    expect(solution("12342394243")).toBeFalsy();
    expect(solution("14g41115")).toBeFalsy();  
  })
});
