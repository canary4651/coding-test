function solution1(numbers, hand) {
  const left = [1, 4, 7];
  const right = [3, 6, 9];

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  const position = {
    left: [3, 0],
    right: [3, 2],
  };

  const result = numbers.map((number) => {
    const now = keypad[number];

    if (left.includes(number)) {
      position.left[0] = now[0];
      position.left[1] = now[1];

      return 'L';
    }

    if (right.includes(number)) {
      position.right[0] = now[0];
      position.right[1] = now[1];

      return 'R';
    }

    // TODO: 거리비교

    const leftDistance = Math.abs(position.left[0] - now[0]) + Math.abs(position.left[1] - now[1]);
    const rightDistance = Math.abs(position.right[0] - now[0]) + Math.abs(position.right[1] - now[1]);

    if (leftDistance === rightDistance) {
      if (hand === 'left') {
        position.left[0] = now[0];
        position.left[1] = now[1];

        return 'L';
      }

      if (hand === 'right') {
        position.right[0] = now[0];
        position.right[1] = now[1];

        return 'R';
      }
    }

    if (leftDistance < rightDistance) {
      position.left[0] = now[0];
      position.left[1] = now[1];

      return 'L';
    }

    position.right[0] = now[0];
    position.right[1] = now[1];

    return 'R';
  });

  return result.join('');
}

function solution2(numbers, hand) {
  const left = [1, 4, 7];
  const right = [3, 6, 9];

  const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  function pushKeypad(keyPads, result, leftPosition, rightPosition) {
    if (keyPads.length === 0) {
      return result.join('');
    }

    const keypad = keyPads[0];

    if (left.includes(keypad)) {
      return pushKeypad(keyPads.slice(1), [...result, 'L'], position[keypad], rightPosition);
    }

    if (right.includes(keypad)) {
      return pushKeypad(keyPads.slice(1), [...result, 'R'], leftPosition, position[keypad]);
    }

    const now = position[keypad];
    const leftDistance = Math.abs(leftPosition[0] - now[0]) + Math.abs(leftPosition[1] - now[1]);
    const rightDistance = Math.abs(rightPosition[0] - now[0]) + Math.abs(rightPosition[1] - now[1]);

    if (leftDistance === rightDistance) {
      const direction = hand.slice('', 1).toUpperCase();
      return pushKeypad(keyPads.slice(1), [...result, direction], position[keypad], rightPosition);
    }

    if (leftDistance < rightDistance) {
      return pushKeypad(keyPads.slice(1), [...result, 'L'], position[keypad], rightPosition);
    }

    return pushKeypad(keyPads.slice(1), [...result, 'R'], leftPosition, position[keypad]);
  }

  return pushKeypad(numbers, [], [3, 0], [3, 2]);
}

test('solution', () => {
  [solution1, solution2].forEach((solution) => {
    expect(solution([1, 3, 4], 'right')).toBe('LRL');
    expect(solution([3, 6, 9, 1, 4, 7], 'right')).toBe('RRRLLL');
    expect(solution([1, 3, 4, 5], 'right')).toBe('LRLL');
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe('LRLLLRLLRRL');
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe('LRLLLRLLRRL');
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).toBe('LRLLRRLLLRR');
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).toBe('LLRLLRLLRL');
  });
});
