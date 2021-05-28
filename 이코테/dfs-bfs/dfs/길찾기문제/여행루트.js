function solution(tickets) {
    let answer = [];
    const result = [];
    const visited = [];

    tickets.sort(); //!소팅 해서 여러개 담을 필요 없고 하나만 만들어지면 그대로 정답!
    console.log(tickets);
    const len = tickets.length;
    const dfs = (str, count) => {
        result.push(str); //! 현재 역 담기

        if (count === len) {
            //!끝까지 왔으면 return true
            answer = result;
            return true;
        }

        for (let i = 0; i < len; i++) {
            console.log("hellot", visited[i], result, str);
            if (!visited[i] && tickets[i][0] === str) {
                //! 현재 노드 찾기 -> 방문한적 없고, 현재노드와 같으면(원래 배열이 안바뀌기 떄문에 가능)
                visited[i] = true; //! 현재 노드 방문 표시

                if (dfs(tickets[i][1], count + 1)) return true; //! 더 내려갈수있으면 리턴트루

                visited[i] = false; //! 더 갈곳이없는경우 방문 취소하고
            }
        }

        result.pop(); //! 방문 취소하는것

        return false;
    };

    dfs("ICN", 0);

    return answer;
}
console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
);
