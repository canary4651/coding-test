function isValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const word = str[i];

    if (word === '(') {
      stack.push(word);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}

function split(str) {
  let count = 0;

  for (let j = 0; j < str.length; j++) {
    const word = str[j];

    if (word === '(') {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      return { u: str.slice(0, j + 1), v: str.slice(j + 1) };
    }
  }
}

const createU = (u) => {
  const result = Array.from(u.slice(1, u.length - 1))
    .map((char) => {
      if (char === '(') {
        return ')';
      }
      return '(';
    })
    .join('');
  return result;
};

function solution(p) {
  if (p.length === 0) {
    return '';
  }
  const { u, v } = split(p);

  if (isValid(u)) {
    return u + solution(v);
  }
  return `(${solution(v)})${createU(u)}`;
}

test('solution', () => {
  expect(solution('(()())()')).toBe('(()())()');
  expect(solution(')(')).toBe('()');
  expect(solution('()))((()')).toBe('()(())()');
});
