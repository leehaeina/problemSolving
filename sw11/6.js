const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
 
let count = 0; // 몇번째 라인을 입력 받는지를 저장하는 변수
rl.on("line", function(line){
    if(count == 0)
        N = Number(line.trim());
    else if(count == 1){
        let  answer = solution(line.trim());
        rl.close();
    }
    count++;
})
 
function solution(input){
    let arr = input.split(' ').map((num) => parseInt(num));
    let total = 0;
    let size = arr.length;
    let front_max;
    let back_max;
    let front_arr ;
    let back_arr ;
    
    while(size>=2){
        
    front_arr = arr.slice(0,size/2);
    back_arr = arr.slice(size/2,size);
    console.log(front_arr,back_arr)
    front_max  =  getMax(front_arr);
    back_max  = getMax(back_arr);
    if(front_max>back_max){
        total += front_max;
        arr = back_arr;
    }
    else{
        total+= back_arr;
        arr = front_max;
    }
        

    
   
    
    
    size = size/2;
}

return total;
    
}
function getMax(array) 
{
    return Math.max.apply(null, array);
}

import sys
from collections import defaultdict

skills = sys.stdin.readline().split() # K 개
N = int(sys.stdin.readline().strip())


related = defaultdict(list)
type = {}
for s in skills:
    type[s] = True
for i in range(N):
    x, y = sys.stdin.readline().split()
    related[x].append(y)
    type[y] = False

def dfs(s, lst):
    lst.append(s)

    if s not in related.keys():
        for l in lst:
            sys.stdout.write(str(l)+' ')
        sys.stdout.write('\n')
    for i in related[s]:
        dfs(i, lst)
        lst.pop()

s = list(related.keys())[0]     
for s in list(related.keys()):
    if type[s] == True:
        start = s

dfs(start, [])