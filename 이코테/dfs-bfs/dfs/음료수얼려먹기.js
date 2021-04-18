let graph = [
    [0,0,1,1,0],
    [0,0,0,1,1],
    [1,1,1,1,1],
    [0,0,0,0,0]
]
const n = 4
const m = 5
let count = 0
function dfs(i,j){
    //console.log(graph[i][j],i,j)
 if(i>=n || i<0 || j >=m||j<0) {return false}
 else if(graph[i][j] === 1) {return false}

else{
    graph[i][j] = 1
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
        
        return true
    }

}

graph.reduce((acc,cur,i)=>{
    cur.reduce((a,c,j)=>{
        console.log(i,j,graph[i][j])
        if(dfs(i,j)===true) count++;
        
    },[])
},[])

console.log(count)