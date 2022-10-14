function solution(s) {
  const sentence = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      sentence.push('(');
      count++;
    } else {
      sentence.pop();
      count--;
    }
  }
  if (sentence.length > 0 || count !== 0) return false;
  return true;
}

function solution1(s) {
  let result = true;

  if (s[0] === ')' || (s[s.length - 1] === '(')) result = false;

  const left = s.split('').filter(((sentence) => sentence === '(')).length;
  const right = s.split('').filter(((sentence) => sentence === ')')).length;

  if (left !== right) return false;

  return result;
}

function solution2(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
    } if (count < 0) return false;

    if (i === s.length - 1) {
      return count === 0;
    }
  }
}

test('solution', () => {
  expect(solution('()()')).toBeTruthy();
  expect(solution('(())()')).toBeTruthy();
  expect(solution(')()(')).not.toBeTruthy();
  expect(solution('(()(')).not.toBeTruthy();
});

test('solution1', () => {
  expect(solution1('()()')).toBeTruthy();
  expect(solution1('(())()')).toBeTruthy();
  expect(solution1(')()(')).not.toBeTruthy();
  expect(solution1('(()(')).not.toBeTruthy();
});

test('solution2', () => {
  expect(solution2('()()')).toBeTruthy();
  expect(solution2('(())()')).toBeTruthy();
  expect(solution2(')()(')).not.toBeTruthy();
  expect(solution2('(()(')).not.toBeTruthy();
});
