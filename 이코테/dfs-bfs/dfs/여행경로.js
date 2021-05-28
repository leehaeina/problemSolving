function solution(tickets) {
    var answer = [];
    let contries = new Set();
    let graph = {};
    let route = [];
    tickets.reduce((_, c, i) => {
        contries.add(...c);
        console.log(c);
        if (graph.hasOwnProperty(c[0])) {
            graph[c[0]].push(c[1]);
        } else {
            graph[c[0]] = [c[1]];
        }
    }, []);
    console.log(contries.size);
    let count = 0;
    DFS("ICN", ["ICN"]);
    function DFS(airport, now) {
        console.log(airport, now, graph, count);

        if (count === contries.size) {
            route.push(now);
            return;
        }
        count++;
        if (!graph.hasOwnProperty(airport)) {
            return;
        }
        if (graph[airport].length === 0) {
            return;
        } else {
            let next = graph[airport].pop();
            now.push(next);
            DFS(next, now);
        }
    }
    console.log(route);
    return answer;
}
console.log(
    solution([
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
    ])
);

/*전체 방문했는지 체크 
마지막에 join으로 소팅
dfs로 방문했는지 확인하고 연결하기.. 하면될것같은데 말이지.. */
