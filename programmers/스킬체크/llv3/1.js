function solution(A, B) {
    let answer = 0;
    A.sort()
    B.sort()
    let flag = 0;
    for (let i = 0; i<B.length;i++)
    {
        
        for(let j =flag;j<A.length;j++)
        {
            if(A[i]<B[j]){
                flag=j+1;
                answer++;
                break;
            }
        }
    }
    return answer;
}
var obj = {
    a: 1, 
    b: 2, 
    c: 3
};

for (var prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}


