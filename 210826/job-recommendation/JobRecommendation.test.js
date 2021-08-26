function solution(table, languages, preference) {
  const languagesPreferences = Object.fromEntries(
    languages.map((lang, i) => [lang, preference[i]]),
  );

  const calculate = (fieldLanguages) => (
    fieldLanguages.reduce((acc, cur, i) => acc + (5 - i) * (languagesPreferences[cur] || 0), 0)
  );

  return table
    .map((str) => str.split(' '))
    .map(([field, ...fieldLanguages]) => [field, calculate(fieldLanguages)])
    .sort(([fieldName1], [fieldName2]) => (fieldName1 < fieldName2 ? -1 : 1))
    .sort(([, score1], [, score2]) => score2 - score1)
    .map(([field]) => field)[0];
}

test('solution', () => {
  const tableExample = ['SI JAVA JAVASCRIPT SQL PYTHON C#', 'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++', 'HARDWARE C C++ PYTHON JAVA JAVASCRIPT', 'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP', 'GAME C++ C# JAVASCRIPT C JAVA'];

  expect(solution(tableExample, ['PYTHON', 'C++', 'SQL'], [7, 5, 5])).toBe('HARDWARE');
});
