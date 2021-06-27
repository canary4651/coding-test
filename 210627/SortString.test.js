function compareString(strings) {
  return [...strings].sort((a, b) => a - b);
}

function solution1(strings, n) {
  return compareString(strings).sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }

    return -1;
  });
}

function solution2(string, n) {
  return [...string].sort((a, b) => (
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  ));
}

function solution3(strings, n) {
  return [...strings].sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

test('solution', () => {
  [solution1, solution2, solution3].forEach((solution) => {
    expect(solution(['sun', 'bed', 'car'], 1)).toStrictEqual(['car', 'bed', 'sun']);
    expect(solution(['abce', 'abcd', 'cdx'], 2)).toStrictEqual(['abcd', 'abce', 'cdx']);
  });
});
