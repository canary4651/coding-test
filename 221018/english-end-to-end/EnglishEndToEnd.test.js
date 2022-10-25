function sample1(n, words) {
  // 틀린 부분의 인덱스를 찾자.
  // findIndex
  // 앞의 배열에 front가 지금 단어를 포함하고 있으면 된다.
  // front.includes(word);
  // 그럼 Front는 뭘까? 앞의 배열! 지금이 i 번째. 0 ~ i-1 번째 배열까지.
  // words.slice(0, i);
  const duplitWordIndex = words.findIndex((word, i) => words.slice(0, i).includes(word));
  const index = duplitWordIndex;
  // 인덱스를 통해 라운드를 유추한다. -> Math.ceil((index + 1)/n);
  const round = Math.ceil((index + 1) / n);
  // 탈락자를 구한다. 몇 번째 탈락자인지 어떻게 알 수 있을까? n번만큼 반복되고 있음.
  // index가 0일 때, 1임. 나머지 연산자? => index%n+1 => 사람을 알 수 있음.
  // 1 => 1 2=> 2 .... 0 => n
  const player = (index % n) + 1;
  // 틀린 조건을 찾자. (왜 8이 틀렸을까?) => 앞에 이미 나온 단어가 반복되었다.

  return [player, round];
}

test('sample1', () => {
  expect(sample1(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
});

function sample3(n, words) {
  const index = words.findIndex((word, i) => {
    if (i === 0) {
      return false;
    }

    const firstWordLetter = word[0];
    const lastWord = words[i - 1];
    return lastWord[lastWord.length - 1] !== firstWordLetter;
  });

  // for (let i = 1; i < words.length; i++) {
  //   if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
  //     index = i;
  //   }
  // }

  // 단어의 마지막 철자가 뒤의 단어 맨 앞글자와 이어지지 않을 때 틀린다.
  // index를 찾는 건 위와 동일. 그치만 그 안의 내용이 중요하다.
  // 현재 word[i][0] 글자와 그 전 word[i-1][(word[i-1]) - 1]이 일치 하지 않는 단어.

  const round = Math.ceil((index + 1) / n);
  const player = (index % n) + 1;

  return [player, round];
}

test('sample3', () => {
  expect(sample3(
    2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'],
  )).toEqual([1, 3]);
});

function sample2(n, words) {
  // const duplitWordIndex = words.findIndex((word, i) => words.slice(0, i).includes(word));

  // const wrongWordindex = words.findIndex((word, i) => {
  //   if (i === 0) {
  //     return false;
  //   }

  //   const firstWordLetter = word[0];
  //   const lastWord = words[i - 1];
  //   return lastWord[lastWord.length - 1] !== firstWordLetter;
  // });

  // let index = 0;

  // if (duplitWordIndex !== -1) {
  //   index = duplitWordIndex;
  // }

  // if (wrongWordindex !== -1) {
  //   index = wrongWordindex;
  // }

  const conditions = [
    (word, i) => {
      const previousWords = words.slice(0, i);
      return previousWords.includes(word);
    },
    (word, i) => {
      if (i === 0) {
        return false;
      }

      const currentWordFirstLetter = word[0];
      const lastWord = words[i - 1];
      const lastWordLastLetter = lastWord[lastWord.length - 1];
      return lastWordLastLetter !== currentWordFirstLetter;
    },
  ];

  const index = words.findIndex((word, i) => conditions
    .some((condition) => condition(word, i)));

  const round = Math.ceil((index + 1) / n);
  const player = (index % n) + 1;

  return [player, round];
}

test('sample2', () => {
  expect(sample1(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
  expect(sample2(
    2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'],
  )).toEqual([1, 3]);
});

function solution(n, words) {
  let answer = [0, 0];
  const usedWords = [];
  usedWords.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    const beforeWord = words[i - 1];
    const currentWord = words[i];
    if (beforeWord[beforeWord.length - 1] === currentWord[0]
          && usedWords.indexOf(currentWord) === -1) {
      usedWords.push(currentWord);
    } else {
      const turn = parseInt(i / n) + 1;
      const player = i % n + 1;
      return answer = [player, turn];
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
});

function solution1(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const people = i % n + 1;
    const turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      // 이전 단어 마지막 글자
      const last = words[i - 1].split('').pop();

      // 중복이거나 틀린 경우
      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [people, turn];
        break;
      }
    }
  }
  return answer;
}

test('solution1', () => {
  expect(solution1(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
});

function solution2(n, words) {
  let answer = 0;
  for (let i = 1; i < words.length; i++) {
    if (words.indexOf(words[i]) !== i || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      answer = i + 1;
      break;
    }
  }
  return answer ? [answer % n || n, Math.ceil((answer / n))] : [0, 0];
}

test('solution2', () => {
  expect(solution2(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
});

function solution3(n, words) {
  let last = words[0][words[0].length - 1];
  for (let i = 1; i < words.length; i++) {
    // 첫번째 문자 비교
    const getFirst = words[i][0];
    // 마지막 문자
    const getLast = words[i][words[i].length - 1];
    // 몇 번째 사람인지
    const peopleNum = (i + 1) % n === 0 ? n : (i + 1) % n;
    // n 번째 사람이 몇 번째 말한지
    const countWords = Math.ceil((i + 1) / n);

    if (last !== getFirst) return [peopleNum, countWords];
    if (words.slice(0, i).includes(words[i])) return [peopleNum, countWords];
    last = getLast;
  }
  return [0, 0];
}

test('solution3', () => {
  expect(solution3(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'],
  )).toEqual([3, 3]);
});
