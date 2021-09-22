function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(numbers) {
  const answer = new Set();
  const nums = numbers.split('');

  const getPrime = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, 1);

        if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }

        getPrime(copyArr, newFixed);
      }
    }
  };

  getPrime(nums, '');

  return answer.size;
}

test('solution', () => {
  expect(solution('17')).toEqual(3);
});
