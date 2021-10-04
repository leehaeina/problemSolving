let graph = [
    [1,0,1,0,1,0],
    [1,1,1,1,1,1],
    [0,0,0,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
]
let n = 5
let m = 6

let q = []

let dx = [1,-1,0,0]
let dy = [0,0,1,-1]
q.push([0,0])
while(q.length){
    let [x,y] = q.shift()
    for(let i = 0; i<dx.length;i++)
    {
        let nx = x + dx[i];
        let ny = y + dy[i];
        //console.log(graph[nx][ny])
        if(nx<0 || nx>=n ||ny<0||ny>=m){
            break
        }
        else if(graph[nx][ny]>1) break;
        else{
            graph[nx][ny] = graph[x][y] + 1;
            q.push([nx,ny]);
        }
    }
}

console.log(graph[n-1][m-1])