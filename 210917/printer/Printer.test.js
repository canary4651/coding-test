function solution(priorities, location) {
  let result = 0;
  const printList = priorities.map((_, i) => i);

  while (printList.length > 0) {
    const top = printList.shift();

    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] > priorities[top]) {
        printList.push(top);
        break;
      }
    }

    if (!printList.includes(top)) {
      priorities.fill(-1, top, top + 1);
      result++;
      if (top === location) {
        return result;
      }
    }
  }
}

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
