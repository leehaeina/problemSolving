function solution(maps) {
  var answer = 0;
  let que = [];
  que.push([0, 0]);
  let diff = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  while (que.length) {
    let [x, y] = que.shift();
    for (let i = 0; i < diff.length; i++) {
      let nx = x + diff[i][0];
      let ny = y + diff[i][1];
      if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length)
        continue;
      else if (maps[nx][ny] > 1 || maps[nx][ny] == 0) continue;
      else {
        maps[nx][ny] = maps[x][y] + 1;
        que.push([nx, ny]);
      }
    }
  }

  answer =
    maps[maps.length - 1][maps[0].length - 1] > 1
      ? maps[maps.length - 1][maps[0].length - 1]
      : -1;
  return answer;
}

let que = [];
let diff = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];
que.push([0, 0]);
while (que.length) {
  let [x, y] = que.shift();
  for (let i = 0; i < diff.length; i++) {
    let nx = x + diff[i][0];
    let ny = y + diff[i][1];
    if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
    else if (maps[nx][ny] > 1 || maps[nx][ny] === 0) continue;
    else {
      maps[nx][ny] = maps[x][y] + 1;
      que.push([nx, ny]);
    }
  }
}
answer =
  maps[maps.length - 1][maps[0].length] > 1
    ? maps[maps.length - 1][maps[0].length]
    : -1;
