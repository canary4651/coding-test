// 저주의 숫자 3
function solution(n) {
  // 3의 배수와 숫자 3을 사용하지 않음
  let number = 0;
  let count = 0;

  while (count < n) {
    number += 1;
    if (!(`${number}`).includes('3') && number % 3 !== 0) {
      count += 1;
    }
  }
  return number;
}

test('solution', () => {
  expect(solution(15)).toEqual(25);
});

// 평행
function solution1(dots) {
  const leans = [];

  for (let i = 0; i < dots.length; i += 1) {
    for (let j = i + 1; j < dots.length; j += 1) {
      const curve = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);

      if (leans.includes(curve)) {
        return 1;
      }
      leans.push(curve);
    }
  }
  return 0;
}

test('solution', () => {
  expect(solution1([[1, 4], [9, 2], [3, 8], [11, 6]])).toEqual(1);
});

// 겹치는 선분의 길이
function solution2(lines) {
  return 2;
}

test('solution', () => {
  expect(solution2([[0, 1], [2, 5], [3, 9]])).toEqual(2);
});

function cal_gcd(x, y) {
  return x % y === 0 ? y : cal_gcd(y, x % y);
}

function primeFactors(n) {
  const result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n /= divisor;
    } else divisor++;
  }

  return [...new Set(result)];
}
// 유한소수 판별하기
function solution3(a, b) {
  // 기약분수로 나타냈을 때 분모의 소인수가 2,5만 존재해야함.
  const gcd = cal_gcd(a, b);
  a /= gcd;
  b /= gcd;

  const primes = primeFactors(b);
  return primes.find((n) => n !== 2 && n !== 5) ? 2 : 1;
  // Number((a/b).toFixed(10) == a/b ? 1 : 2)
  // (a/b).toString().length > 10 ? 2 : 1
}

test('solution3', () => {
  expect(solution3(7, 20)).toEqual(1);
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
