function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);
  visited.reduce((_, v, i) => {
    if (v === false) {
      DFS(i, visited);
      answer++;
    }
  }, "");

  function DFS(computer, visited) {
    visited[computer] = true;
    for (let connect = 0; connect < n; connect++) {
      if (computer != connect && computers[computer][connect] === 1) {
        if (visited[connect] === false) DFS(connect, visited);
      }
    }
  }
  return answer;
}
