function maximunUnits(boxTypes, truckSize) {
  // 변하는 게 2가지: truckSize의 개수와 장난감 개수가 변함
  // 변수: truckSize

  boxTypes.sort((a, b) => b[1] - a[1]);

  let capacity = truckSize;
  let toiesCount = 0;

  //  [ [ 5, 10 ], [ 3, 9 ], [ 4, 7 ], [ 2, 5 ] ]

  // 박스 5개, 장난감 개수는 5*10개고, capacity는 (10 - 5)개
  // boxCount=5, toyPerBox =10; capacity (capacity - boxCount)

  // let boxCount = 5;
  // let toyPerBox = 10;

  // capacity = capacity - boxCount;
  // toiesCount = toiesxCount + (boxCount * toyPerBox);

  // 이거를 반복해주면 된다.

  boxTypes.forEach(([boxCount, toyPerBox]) => {
    // 돌아가면서 넣었을 때, 저장공간이 충분하지 않은 경우 -> truckSize가 내 남은 상자보다 작은 경우
    if (capacity < boxCount) {
      // 넣을 수 있는 것만 넣자. -> 남은 capacity => 0
      toiesCount += (capacity * toyPerBox);
      capacity = 0;
      return;
    }
    capacity -= boxCount;
    toiesCount += (boxCount * toyPerBox);
  });

  return toiesCount;
}

function maximunUnits1(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let result = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    if (boxTypes[i][0] < truckSize) {
      truckSize -= boxTypes[i][0];
      result += (boxTypes[i][0] * boxTypes[i][1]);
    } else {
      result += (truckSize * boxTypes[i][1]);
      truckSize = 0;
    }
  }
  return result;
}

function maximunUnits2(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let result = 0;

  for (let i = 0; i < boxTypes.length && truckSize; i++) {
    const count = Math.min(truckSize, boxTypes[i][0]);
    result += count * boxTypes[i][1];
    truckSize -= count;
  }
  return result;
}

// 재귀
function maximunUnits3(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  function counToys(capacity = truckSize, index = 0) {
    if (capacity === 0) {
      return 0;
    }

    const [boxCount, toyCount] = boxTypes[index];

    if (capacity < boxCount) {
      return capacity * toyCount + counToys(0, index + 1);
    }

    return boxCount * toyCount + counToys(
      capacity - boxCount,
      index + 1,
    );
  }

  return counToys();
}

test('maximunUnits', () => {
  expect(maximunUnits(
    [[5, 10], [2, 5], [4, 7], [3, 9]], 10,
  )).toEqual(91);
});

test('maximunUnits1', () => {
  expect(maximunUnits1(
    [[5, 10], [2, 5], [4, 7], [3, 9]], 10,
  )).toEqual(91);
});

test('maximunUnits2', () => {
  expect(maximunUnits2(
    [[5, 10], [2, 5], [4, 7], [3, 9]], 10,
  )).toEqual(91);
});

test('maximunUnits3', () => {
  expect(maximunUnits3(
    [[5, 10], [2, 5], [4, 7], [3, 9]], 10,
  )).toEqual(91);
});
