function solution(s) {
  var answer = [];
  let arr = s.split(" ");
  answer.push(Math.min(...arr));
  answer.push(Math.max(...arr));
  answer = answer.join(" ");
  return answer;
}
