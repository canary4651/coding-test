function chagneToLowerCase(newId) {
  return newId.toLowerCase();
}
function removeSpecialLetter(newId) {
  const specialCharacter = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g;
  return chagneToLowerCase(newId).replace(specialCharacter, '');
}

function removeRepeat(newId) {
  const repeatFullStop = /\.{2,}/g;
  return removeSpecialLetter(newId).replace(repeatFullStop, '.');
}

function removeFrontAndBackPeroid(newId) {
  return removeRepeat(newId).replace(/^\.|\.$/, '');
}

function addALetter(newId) {
  if (removeFrontAndBackPeroid(newId).length === 0) {
    return `${removeFrontAndBackPeroid(newId)}a`;
  }
  return removeFrontAndBackPeroid(newId);
}

function limitLength(newId) {
  return addALetter(newId).slice(0, 15).replace(/\.$/, '');
}

function addLastLetter(newId) {
  const lastLetter = limitLength(newId);
  if (lastLetter.length <= 2) {
    return lastLetter.padEnd(3, lastLetter[lastLetter.length - 1]);
  }
  return limitLength(newId);
}

function solution1(newId) {
  return addLastLetter(newId);
}

function solution2(newId) {
  const result = newId
    .toLowerCase()
    .replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return result.padEnd(3, result[result.length - 1]);
}

test('change uppercase to lowercase', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(chagneToLowerCase(newId)).toBe('...!@bat#*..y.abcdefghijklm');
});

test('remove special letter', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(removeSpecialLetter(newId)).toBe('...bat..y.abcdefghijklm');
});

test('remove consecutive periods', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(removeRepeat(newId)).toBe('.bat.y.abcdefghijklm');
});

test('remove front and back periods', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(removeFrontAndBackPeroid(newId)).toBe('bat.y.abcdefghijklm');
});

test('if empty string add "a"', () => {
  const newId = '';
  const newId2 = 'bat.y.abcdefghijklm';

  expect(addALetter(newId)).toBe('a');

  expect(addALetter(newId2)).toBe('bat.y.abcdefghijklm');
});

test('lemit length to 2 from 15', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(limitLength(newId)).toBe('bat.y.abcdefghi');
});

test("if letter's length is 2, add last latter", () => {
  const newId1 = 'ab';
  const newId2 = 'bat.y.abcdefghijklm';

  expect(addLastLetter(newId1)).toBe('abb');
  expect(limitLength(newId2)).toBe('bat.y.abcdefghi');
});

test('solution', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';
  const newId1 = 'abcdefghijklmn.p';

  [solution1, solution2].forEach((solution) => {
    expect(solution(newId)).toBe('bat.y.abcdefghi');
    expect(solution(newId1)).toBe('abcdefghijklmn');
    expect(solution('=.=')).toBe('aaa');
    expect(solution('z-+.^."')).toBe('z--');
  });
});
