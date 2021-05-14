function solution(s) {
  var answer = 0;

  let arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === arr[arr.length - 1]) arr.pop();
    else arr.push(s[i]);
  }
  if (arr.length) return 0;

  return 1;
}
