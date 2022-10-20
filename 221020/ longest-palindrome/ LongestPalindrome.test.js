// 붙일때는 회문으로 넣는다. (앞뒤로)
// 알파벳 개수가 나올때, 넣을 수 있을 만큼 넣는다.
// 알파벳 개수가 홀수개라면, 하나 뺀다(단, 처음에는 다 넣어도 됨)
// 제일 처음에 넣는 알파벳은 홀수개, 왜냐면 하나 더 넣을 수 있으니까.
// new! 애초에 홀수 개를 넣을 수 있는 경우는 최초의 한번이다. 나머지는 하나를 빼서 다 붙인다.
// bbb = bab
// new! 짝수개라면 다 붙인다.

function solution(s) {
  const dict = [...s].reduce((a, i) => (a[i] = (a[i] || 0) + 1, a), {});

  let result = 0;

  Object.values(dict).forEach((count) => {
    if (count % 2 === 0) {
      result += count;
    }

    // 그 다음으로 있는 홀수 값(짝수개로 만들어줌)
    if (count % 2 === 1) {
      result += count - 1;
    }

    // 최초에 더해주는 홀수 값
    if (result % 2 === 0 && count % 2 === 1) {
      result += 1;
    }
  });

  return result;
}

function solution1(s) {
  const counts = {};

  [...s].forEach((letter) => {
    if (!counts[letter]) {
      counts[letter] = 0;
    }

    counts[letter] += 1;
  });

  function CountLetters(index = 0, hadOddLetter = false) {
    const count = Object.values(counts)[index];

    if (index === Object.values(counts).length) {
      return 0;
    }

    if (!hadOddLetter && count % 2 === 1) {
      return count + CountLetters(index + 1, true);
    }

    if (count % 2 === 0) {
      return count + CountLetters(index + 1, hadOddLetter);
    }

    if (count % 2 === 1) {
      return count - 1 + CountLetters(index + 1, hadOddLetter);
    }
  }
  //   if (count % 2 === 0) {
  //     return count + CountLetters(index + 1);
  //   }

  //   if (count % 2 === 1) {
  //     return count - 1 + CountLetters(index + 1);
  //   }
  // }

  // Math.floor(count / 2) => 결과를 짝수로 만들어줌
  // 위의 두 조건을 한방에 쓸 수 있음
  // return Math.floor(count / 2) * 2 + CountLetters(index + 1);
  return CountLetters();
}

test('solution', () => {
  expect(solution('abccccdd')).toEqual(7);
});

test('solution1', () => {
  expect(solution1('abccccdd')).toEqual(7);
});
