const message = {
  Enter: '님이 들어왔습니다.',
  Leave: '님이 나갔습니다.',
};

function splitOf(recode) {
  return recode.map((v) => v.split(' '));
}

function solution1(recode) {
  const idSet = new Map();
  const result = [];

  splitOf(recode).forEach(([type, id, name]) => {
    if (type === 'Enter' || type === 'Change') {
      idSet.set(id, name);
    }

    if (type === 'Enter' || type === 'Leave') {
      result.push([type, id]);
    }
  });

  const answer = result.map(([type, id]) => idSet.get(id) + message[type]);

  return answer;
}

function print(sentence, names) {
  const messages = {
    Enter: '들어왔습니다',
    Leave: '나갔습니다',
  };

  const [verb, id] = sentence.split(' ');

  if (verb === 'Change') {
    return '';
  }

  return `${names[id]}님이 ${messages[verb]}.`;
}

test('user enters chat', () => {
  expect(print(
    'Enter uid1234 Muzi',
    { uid1234: 'Muzi' },
  )).toBe('Muzi님이 들어왔습니다.');
});

test('user leaves chat', () => {
  expect(print(
    'Leave uid1234 Muzi',
    { uid1234: 'Muzi' },
  )).toBe('Muzi님이 나갔습니다.');
});

test('user changes name - ignore sentence', () => {
  expect(print(
    'Change uid1234 Muzi',
  )).toBe('');
});

function solution2(recode) {
  const userNames = {};

  recode.forEach((sentence) => {
    const [command, id, name] = sentence.split(' ');

    if (command === 'Leave') {
      return;
    }

    userNames[id] = name;
  });

  return recode
    .map((sentence) => print(sentence, userNames))
    .filter((i) => i);
}

function solution3(record) {
  const userInfo = {};
  const sentence = [];

  const printMessage = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(' ');

    if (state !== 'Change') {
      sentence.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return sentence.map(([state, uid]) => `${userInfo[uid]}${printMessage[state]}`);
}

test('split recode', () => {
  expect(splitOf(['Enter uid1234 Muzi'])).toEqual([['Enter', 'uid1234', 'Muzi']]);
  expect(splitOf(['Enter uid1234 Muzi', 'Enter uid4567 Prodo']))
    .toEqual([['Enter', 'uid1234', 'Muzi'], ['Enter', 'uid4567', 'Prodo']]);
});

test('solution1', () => {
  expect(solution1(
    ['Enter uid1234 Muzi', 'Enter uid4567 Prodo',
      'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'],
  ))
    .toEqual(
      ['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.',
        'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.'],
    );
});

test('solution2', () => {
  expect(solution2(
    ['Enter uid1234 Muzi', 'Enter uid4567 Prodo',
      'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'],
  ))
    .toEqual(
      ['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.',
        'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.'],
    );
});

test('solution3', () => {
  expect(solution3(
    ['Enter uid1234 Muzi', 'Enter uid4567 Prodo',
      'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'],
  ))
    .toEqual(
      ['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.',
        'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.'],
    );
});
