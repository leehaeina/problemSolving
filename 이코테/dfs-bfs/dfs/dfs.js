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

function dfs(graph,v,visited){
    
    visited[v] = true;
    console.log(v);
    graph[v].reduce((acc,cur,index)=>{
        if(!visited[cur])
            dfs(graph,cur,visited)
    },[])
    
}
visited = new Array(9).fill(false)
dfs(graph,1,visited)