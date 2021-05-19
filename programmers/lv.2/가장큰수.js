function solution(numbers) {
  var answer = "";
  //numbers.sort((a,b) => (b+a) - (a+b)).reverse().join('');
  answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  console.log(numbers.map((x) => x + "").sort((a, b) => b + a - (a + b)));
  return answer;
}
