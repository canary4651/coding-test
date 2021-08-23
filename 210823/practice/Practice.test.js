function solution1(arr, k) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        result += 1;
      }
    }
  }
  return result / 2;
}

function solution2(arr, k) {
  const newArray = new Set(arr);

  let result = 0;

  arr.forEach((v) => {
    if (newArray.has(v + k)) {
      result += 1;
    }

    if (newArray.has(v - k)) {
      result += 1;
    }
  });

  return result / 2;
}

test('solution', () => {
  expect(solution1([1, 7, 5, 9, 2, 12, 3], 2)).toBe(4);
  expect(solution2([1, 7, 5, 9, 2, 12, 3], 3)).toBe(2);
});
