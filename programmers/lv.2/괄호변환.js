//괄호가 올바른지 확인 
function isRight(str) {
  let leftStack = [];
  console.log("is", str);
  if (str === "") return true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") leftStack.push(str[i]);
    else if (leftStack.pop() !== "(") return false;
  }
  return true;
}
function divide(str) {
  let left = 0;
  let right = 0;
  let i;
  if (str === "") return "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === "(") left++;
    else right++;
    if (left === right) break;
  }
  console.log("divid", str, i);
  let u = str.slice(0, i + 1);
  let v = str.slice(i + 1, str.length);
  if (isRight(u)) return u + divide(v);
  else return makeRight(u, v);
}
function makeRight(u, v) {
  let str = "(";
  str += divide(v);
  str += ")";
  for (let i = 1; i < u.length - 1; i++) {
    if (u[i] === "(") str += ")";
    else str += "(";
  }
  return str;
}
function solution(p) {
  var answer = "";
  if (isRight(p)) return p;
  answer = divide(p);

  return answer;
}
//console.log(solution("(()())()"));
console.log("solu", solution(")("));
//console.log(solution("()))((()"));

let str = "0123456";
console.log(str.slice(7, 8));
