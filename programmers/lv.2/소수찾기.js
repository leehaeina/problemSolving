function solution(numbers) {
    var answer = 0;
    let arr = numbers.split('').map(x=>+x);
    arr.sort(function(a,b){return b-a});
    let max = parseInt(arr.join(''));
    let primes=[];
    for(let i = 0; i<max;i++)
    {
        for(let j = 2;j<Math.sqrt(i);j++)
        {
            if(i%j === 0) continue;
            
        }
    }
    return answer;
}
console.log(solution("101"));