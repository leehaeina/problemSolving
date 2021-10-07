function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right;i++){
        if(Number.isInteger(i**0.5))
            answer -= i;
        else answer += i;
    }
    return answer;
}