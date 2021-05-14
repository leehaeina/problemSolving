function solution(s) {
  var answer = true;

  let leftStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") leftStack.push(s[i]);
    else if (leftStack.pop() !== "(") return false;
  }
  if (leftStack.length) return false;
  return true;
}
