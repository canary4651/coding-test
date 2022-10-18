// 1. 똑같은 단어가 나오면 그 순번에서 탈락
// 2. 탈락자가 나오지 않으면 0,0 리턴
// 3. 마지막 단어와 같은 단어로 시작하지 않으면 탈락

function divide(words, size) {
  const items = [...words];
  const arr = [];

  while (items.length) {
    arr.push(items.splice(0, size));
  }
  return arr;
}

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
