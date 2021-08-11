function checkTruckAccessible(weight, truck_weights, bridge) {
  if (bridge.reduce((a, b) => a + b[0], 0) + truck_weights[0] <= weight) {
    bridge.push([truck_weights.shift(), 0]);
  }
}

function solution(bridge_length, weight, truck_weights) {
  const bridge = [];
  let time = 0;

  while (true) {
    if (truck_weights.length === 0 && bridge.length === 0) {
      return time + 1;
    }
    checkTruckAccessible(weight, truck_weights, bridge);
    bridge.forEach((v) => v[1] += 1);
    if (bridge[0][1] === bridge_length) {
      bridge.shift();
    }
    time += 1;
  }
}

test('solution', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(solution(100, 100, [10])).toBe(101);
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(110);
});
