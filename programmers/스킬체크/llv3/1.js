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
console.log(solution([5,6,7,8],	[3,4,5,6]))