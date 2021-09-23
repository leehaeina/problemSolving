function solution(tickets) {
    var answer = [];
    tickets.sort();
    let visited = [];
    let length = tickets.length;
    DFS("ICN", 0);
    function DFS(now, count) {
        answer.push(now);
        if (count === length) {
            return true;
        } else {
            for (let i = 0; i < tickets.length; i++) {
                if (!visited[i] && now === tickets[i][0]) {
                    visited[i] = true;
                    if (DFS(tickets[i][1], count + 1)) return true;
                    visited[i] = false;
                }
            }
        }
        answer.pop();
        return false;
    }
    return answer;
}
