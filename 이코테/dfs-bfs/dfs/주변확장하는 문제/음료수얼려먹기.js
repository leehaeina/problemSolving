let graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
const n = 4;
const m = 5;
let count = 0;
let diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
// function dfs(i, j) {
//   //console.log(graph[i][j],i,j)
//   if (i >= n || i < 0 || j >= m || j < 0) {
//     return false;
//   } else if (graph[i][j] === 1) {
//     return false;
//   } else {
//     graph[i][j] = 1;
//     for (let x = 0; x < diff.length; x++) {
//       dfs(i + diff[x][0], j + diff[x][1]);
//     }

//     return true;
//   }
// }

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= m) return false;
  else if (graph[x][y] === 1) return false;
  else {
    graph[x][y] = 1;
    for (let i = 0; i < diff.length; i++) {
      let nx = x + diff[i][0];
      let ny = y + diff[i][1];
      dfs(nx, ny);
    }
    return true;
  }
}

graph.reduce((acc, cur, i) => {
  cur.reduce((a, c, j) => {
    console.log(i, j, graph[i][j]);
    if (dfs(i, j) === true) count++;
  }, []);
}, []);

console.log(count);
