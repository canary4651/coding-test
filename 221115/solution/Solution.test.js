// 특이한 정렬
function solution(list, n) {
  return list.sort((prev, cur) => {
    const [a, b] = [Math.abs(prev - n), Math.abs(cur - n)];
    if (a === b) return cur - prev;
    return a - b;
  });
}

test('solution', () => {
  expect(solution([1, 2, 3, 4, 5, 6], 4)).toEqual([4, 5, 3, 6, 2, 1]);
});

// 등수 매기기
function solution1(scores) {
  const dict = {};
  scores
    .map(([a, b]) => (a + b) / 2)
    .sort((a, b) => b - a)
    .forEach((a, i) => (dict[a] === undefined ? dict[a] = i + 1 : null));

  return scores.map(([a, b]) => dict[(a + b) / 2]);
}

test('solution', () => {
  expect(solution1([[80, 70], [90, 50], [40, 70], [50, 80]])).toEqual([1, 2, 4, 3]);
});

// 로그인 성공?
function solution2(idpw, db) {
  // let result = '';

  // db.map((v) => {
  //   if (v[0] === idpw[0] && v[1] === idpw[1]) result = 'login';
  //   if (v[0] === idpw[0] && v[1] !== idpw[1]) result = 'wrong pw';
  //   if (v[0] !== idpw[0] && v[1] !== idpw[1]) result = 'fail';
  // });
  // return result;

  db = db.filter((v) => v[0] === idpw[0]);

  if (!db.length) return 'fail';

  const result = db.map((v) => (v[1] === idpw[1] ? 'login' : 'wrong pw'));
  return result.toString();
}

test('solution', () => {
  expect(solution2(['meosseugi', '1234'],
    [['rardss', '123'], ['yyoom', '1234'], ['meosseugi', '1234']])).toEqual('login');
  expect(solution2(['programmer01', '15789'],
    [['programmer02', '111111'], ['programmer00', '134'], ['programmer01', '1145']])).toEqual('wrong pw');
  expect(solution2(['rabbit04', '98761'],
    [['jaja11', '98761'], ['krong0313', '29440'], ['rabbit00', '111333']])).toEqual('fail');
});

// 옹알이
function solution3(babbling) {
  // aya, ye, woo, ma 네가지 발음을 최대 한 번씩 사용해 이어붙인 발음밖에 못한다.
  let count = 0;

  babbling.map((v) => {
    if (v.split(/aya|ye|woo|ma/g).join('') === '') {
      count++;
    }
  });

  return count;
}

test('solution3', () => {
  expect(solution3(['aya', 'yee', 'u', 'maa', 'wyeoo'])).toEqual(1);
  expect(solution3(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])).toEqual(3);
});
