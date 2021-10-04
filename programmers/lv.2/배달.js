function solution(N, road, K) {
    var answer = 0;
    let que = [];
    let solution = Array(N + 1).fill(Infinity);
    solution[1] = 0;
    let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(Infinity));
    road.reduce((_, cur, i) => {
      graph[cur[0]][cur[1]] = Math.min(cur[2], graph[cur[0]][cur[1]]);
      graph[cur[1]][cur[0]] = Math.min(cur[2], graph[cur[0]][cur[1]]);
      // if(cur[0] === 1||cur[1]===1) solution[cur[0]*cur[1]] = cur[2]
    }, []);
   
    que.push(1);
    while (que.length) {
      
      let town = que.shift();
      let next = graph[town].reduce((a, c, i) => {
        if (c != Infinity) a.push(i);
        return a;
      }, []);z
    
      for (let i = 0; i < next.length; i++) {
        if (solution[next[i]] > solution[town] + graph[town][next[i]]) {
          solution[next[i]] = solution[town] + graph[town][next[i]];
          que.push(next[i]);
        }
      }
  
    }
  
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    answer = solution.filter((x) => x <= K).length;
  
    return answer;
  }
  
  