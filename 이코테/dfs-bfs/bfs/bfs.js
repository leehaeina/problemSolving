let graph = [
    [],
    [2,3,4],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]
let visited = new Array(9).fill(false)

function bfs(graph,start,visited)
{
    q = [start];
    visited[start] = true;
    while(q.length){
        node = q.shift();
        console.log(node);
        graph[node].reduce((acc,cur,index)=>{
            if(!visited[cur]){
                visited[cur] = true
                q.push(cur)
            }
        },[])
    }
}
bfs(graph,1,visited)