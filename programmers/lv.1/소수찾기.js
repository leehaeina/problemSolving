function isPrime(n){
    if(n===1) return false;
    else if(n === 2) return true;
    else{
        for(let i = 2; i<=Math.sqrt(n);i++)
        {
            
            if(n%i===0) 
            { 
                return false;
            }
           
        }
    }
    return true;
}
function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n;i++)
    {
        isPrime(i) ? answer++ : null;
    }
    return answer;
}
console.log(solution(10))