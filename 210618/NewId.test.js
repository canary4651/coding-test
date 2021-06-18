function chagneToLowerCase(newId) {
  return newId.toLowerCase();
}
function removeSpecialLetter(newId) {
  const specialCharacter = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g;
  return chagneToLowerCase(newId).replace(specialCharacter, '');
}

function RemoveRepeat(newId) {
  const repeatFullStop = /\.{2,}/g;
  return removeSpecialLetter(newId).replace(repeatFullStop, '.');
}

function RemoveFrontAndBackPeroid(newId) {
  return RemoveRepeat(newId).replace(/^\.|\.$/, '');
}

function AddALetter(newId) {
  if (RemoveFrontAndBackPeroid(newId).length === 0) {
    return `${RemoveFrontAndBackPeroid(newId)}a`;
  }
  return RemoveFrontAndBackPeroid(newId);
}

function LimitLength(newId) {
  return AddALetter(newId).slice(0, 15).replace(/\.$/, '');
}

function AddLastLetter(newId) {
  const lastLetter = LimitLength(newId);
  if (lastLetter.length <= 2) {
    return lastLetter.padEnd(3, lastLetter[lastLetter.length - 1]);
  }
  return LimitLength(newId);
}

function solution1(newId) {
  return AddLastLetter(newId);
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

  expect(RemoveRepeat(newId)).toBe('.bat.y.abcdefghijklm');
});

test('remove front and back periods', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(RemoveFrontAndBackPeroid(newId)).toBe('bat.y.abcdefghijklm');
});

test('if empty string add "a"', () => {
  const newId = '';
  const newId2 = 'bat.y.abcdefghijklm';

  expect(AddALetter(newId)).toBe('a');

  expect(AddALetter(newId2)).toBe('bat.y.abcdefghijklm');
});

test('lemit length to 2 from 15', () => {
  const newId = '...!@BaT#*..y.abcdefghijklm';

  expect(LimitLength(newId)).toBe('bat.y.abcdefghi');
});

test("if letter's length is 2, add last latter", () => {
  const newId1 = 'ab';
  const newId2 = 'bat.y.abcdefghijklm';

  expect(AddLastLetter(newId1)).toBe('abb');
  expect(LimitLength(newId2)).toBe('bat.y.abcdefghi');
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
