const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
 let skills;
 let arr = [];
let count = 0; // 몇번째 라인을 입력 받는지를 저장하는 변수
rl.on("line", function(line){
    if(count == 0)
       { skills = line.trim();
        
       }
    else if( count == 1){
        N = Number(line.trim());
      
    }
   
    else{
        arr.push(line.trim().split(' '));
        let answer ;
        if(count===N) answer = solution(arr);
        if(count === N+1) rl.close();
    }
    count++;
})
 
let type = [];
for(let i = 0;i<skills.length;i++)
    type[i] = True;
for (let j = 0;j<N;j++){
    x, y = sys.stdin.readline().split()
    related[x].append(y)
    type[y] = False
}
function dfs(s, lst):
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
