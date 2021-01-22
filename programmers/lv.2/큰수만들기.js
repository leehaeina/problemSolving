function solution(number, k) {
    var answer = '';
    let start = 0;
    let end = number.length - k;
    let arr = number.split('').map(v=>parseInt(v));
    for(let i = (arr.length-k);i>0;i--)
    {
        let sliced = arr.slice(start,end+1);
        let max = Math.max.apply(null,sliced);
        let index = sliced.indexOf(max) + 1;
        start = start + index;
        end = arr.length -i+1;
        answer += max;
    }
    return answer;
}

console.log(solution("1924",2));