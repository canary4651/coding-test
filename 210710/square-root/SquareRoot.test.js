function solution(n) {
  const square = Math.sqrt(n)
  return Number.isInteger(square) ? Math.pow(square+1, 2) : -1;
}

test('solution', () => {
    expect(solution(121)).toBe(144);
    expect(solution(3)).toBe(-1);
});
