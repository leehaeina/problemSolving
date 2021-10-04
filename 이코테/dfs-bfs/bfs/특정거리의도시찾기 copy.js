let graph = [
[1,2],
[1,3],
[2,3],
[2,4]
]

let n = 4 , m = 4, k = 2, x = 1

let distance = new Array(n+1).fill(-1);

const city = Array.from(Array(n+1), () => new Array())

graph.reduce((acc,cur)=>{
    
    city[cur[0]].push(cur[1])
    //city[cur[1]].push(cur[0])
},[])

let q = [];
q.push(x)
distance[x] = 0
while(q.length){
    let node = q.shift()
    if(city[node].length)
    city[node].reduce((acc,cur,index)=>{
  
        if(distance[cur]===-1){
            distance[cur] = distance[node] +1
            q.push(cur)
          
        }
    },[])
}
console.log(distance);
let check = false;
distance.reduce((acc,cur,index)=>{
    if(cur === k) {check = true;console.log("index",index)
}},[])

if(!check) console.log(-1) 

console.log(city,k,x)