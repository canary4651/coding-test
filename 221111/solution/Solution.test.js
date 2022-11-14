// 직사각형 넓이 구하기
function solution(dots) {
  // 가장 큰 x의 값 - 가장 작은 x의 값 (가로)
  // 가장 큰 y의 값 - 가장 작은 y의 값 (세로)
  const dotx = dots.flatMap(([x, y]) => x);
  const doty = dots.flatMap(([x, y]) => y);

  const width = Math.max(...dotx) - Math.min(...dotx);
  const height = Math.max(...doty) - Math.min(...doty);
  return width * height;
}

test('solution', () => {
  expect(solution([[1, 1], [2, 1], [2, 2], [1, 2]])).toEqual(1);
});

// 캐릭터의 좌표
// function solution1(keyinput, board) {
//   const left = keyinput.filter((w) => w === 'left').length;
//   const right = keyinput.filter((w) => w === 'right').length;
//   const up = keyinput.filter((w) => w === 'up').length;
//   const down = keyinput.filter((w) => w === 'down').length;

//   const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

//   const first = right - left;
//   const second = up - down;

//   return [Math.abs(rangeX) < Math.abs(first) ? rangeX : first,
//     Math.abs(rangeY) < Math.abs(second) ? -rangeY : second];
// }

function solution1(keyinput, board) {
  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  return keyinput
    .map((key) => moves[key])
    .reduce(
      ([x, y], [mX, mY]) => (Math.abs(x + mX) > rangeX || Math.abs(y + mY) > rangeY ? [x, y] : [x + mX, y + mY]),
      [0, 0],
    );
}

test('solution', () => {
  expect(solution1(['left', 'right', 'up', 'right', 'right'], [11, 11])).toEqual([2, 1]);
  expect(solution1(['down', 'down', 'down', 'down', 'down'], [7, 9])).toEqual([0, -4]);
});

// 최대값 만들기(2)
function solution2(numbers) {
  const arr = numbers.sort((a, b) => a - b);
  return Math.max(arr[0] * arr[1], arr[arr.length - 1] * arr[arr.length - 2]);
}

test('solution', () => {
  expect(solution2([1, 2, -3, 4, -5])).toEqual(15);
  expect(solution2([0, -31, 24, 10, 1, 9])).toEqual(240);
});

// 다항식 더하기
function solution3(polynomial) {
  // 문자열대로 더하고 숫자도 숫자대로 더하기
  const datas = polynomial.split('+');

  let [x, c] = datas.reduce(([a, b], s) => {
    if (s.includes('x')) {
      return [a + Number(s.trim().replace('x', '') || 1), b];
    }
    return [a, b + Number(s)];
  }, [0, 0]);

  if (!x && !c) return '0';

  if (!x) return c.toString();
  x = `${x === 1 ? '' : x}x`;
  if (!c) return x;
  return `${x} + ${c}`;
}

test('solution3', () => {
  expect(solution3('3x + 7 + x')).toEqual('4x + 7');
});

// 숨어있는 숫자의 덧셈
function solution4(str) {
  const numbers = str.match(/[0-9]+/g);
  return numbers ? numbers.map((n) => +n).reduce((acc, cur) => acc + cur, 0) : 0;
}

test('solution4', () => {
  expect(solution4('aAb1B2cC34oOp')).toEqual(37);
});

// 안전지대

function solution5(board) {
  let result = 0;
  // 전체 순회
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // board[i][j]의 값이 1인경우 상하좌우 및 대각선 검사를 실행
      if (board[i][j] === 1) {
        // 상하 좌우를 2로 변경하되 이는 해당 칸이 0인 경우에만 해당 즉 폭탄은 건들지 않는다.
        // 맨 윗줄이 아닌 경우
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 맨 아랫줄이 아닌 경우
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 맨 왼쪽이 아닌 경우
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 맨 오른쪽이 아닌 경우
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // 맨 대각선 윗 왼쪽이 아닌 경우
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // 맨 대각선 윗 오른쪽이 아닌 경우
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // 맨 대각선 아랫 왼쪽이 아닌 경우
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        // 맨 대각선 아랫 오른쪽이 아닌 경우
        if (i !== board.length - 1 && j !== board[i].length - 1 && board[i + 1][j + 1] !== 1) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }
  board.forEach((a) => a.forEach((b) => (b === 0 ? result++ : null)));
  return result;
}

test('solution', () => {
  expect(solution5([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])).toEqual(16);
  expect(solution5([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])).toEqual(13);
});

// 삼각형의 완성조건 (2)
function solution6(sides) {
  // 가장 긴 변의 길이가 다른 두변의 길이의 합보다 작아야함.
  let count = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  // 1) sides에 있는 원소가 가장 길 경우
  for (let i = max - min + 1; i <= max; i++) {
    count++;
  }
  for (let i = max + 1; i < max + min; i++) {
    count++;
  }

  return count;
  // 공식이 존재
  // return Math.min(...sides)*2-1;
}

test('solution', () => {
  expect(solution6([3, 6])).toEqual(5);
});

// 외계어 사전

function solution7(spell, dic) {
  // spell을 모두 한번씩만 조합해서 사용해야함
  const word = spell.sort().join('');
  return dic.map((a) => a.split('').sort().join('')).find((v) => v === word) ? 1 : 2;
}

test('solution7', () => {
  expect(solution7(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])).toEqual(2);
  expect(solution7(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])).toEqual(1);
});
