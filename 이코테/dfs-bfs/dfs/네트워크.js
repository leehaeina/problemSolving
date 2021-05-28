function solution(n, computers) {
    var answer = 0;
    //! 방문했는지 체크하는 배열 생성
    let visited = new Array(n).fill(false);
    //! 방문 배열을 순회하면서 확인안한(false) 컴퓨터 확인하기
    visited.reduce((_, x, i) => {
        if (x === false) {
            DFS(i);
            answer++; //!연결된 애들은 다 true가 되었기 때문에 추가되지않음!
        }
    }, false);
    function DFS(computer) {
        visited[computer] = true;
        for (let i = 0; i < n; i++) {
            //!연결되어있는데 방문하지 않은 경우 DFS 실행
            if (i != computer && computers[computer][i] === 1) {
                if (visited[i] === false) DFS(i);
            }
        }
    }
    return answer;
}
