function solution(a, b) {
    var answer = 1234567890;
    answer= a.reduce((acc,item,index)=>{
       return acc + item*b[index]; 
    },0)
    return answer;
}