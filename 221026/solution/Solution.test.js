// 리트코드
function leetcodeSolution(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

test('solution', () => {
  expect(leetcodeSolution([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(leetcodeSolution([3, 2, 4], 6)).toEqual([1, 2]);
  expect(leetcodeSolution([3, 2, 3], 6)).toEqual([0, 2]);
});

// 소수찾기
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function permutations(number, indexes = [], answer = []) {
  if (indexes.length > number) {
    return;
  }

  answer.push(indexes);

  for (let i = 0; i < number; i += 1) {
    if (indexes.includes(i)) {
      continue;
    }
    permutations(number, [i, ...indexes], answer);
  }

  return answer;
}

function generateCandidates(numbers) {
  const candidates = new Set();

  for (indexes of permutations(numbers.length)) {
    const candidateString = indexes.map((i) => numbers[i]).join('');

    const candidate = Number(candidateString);

    candidates.add(candidate);
  }

  return [...candidates];
}

function solution(numbers) {
  const candidates = generateCandidates(numbers);

  return candidates.filter(isPrime).length;
}

test('solution', () => {
  expect(solution('17')).toEqual(3);
  expect(solution('011')).toEqual(2);
});
