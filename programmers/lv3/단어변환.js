function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) return 0;
  let min = Infinity;
  dfs(begin, words, target, 0);
  function dfs(now, words, target, count) {
    if (now.includes(target)) {
      max = Math.min(min, count);
      return;
    } else {
      console.log("now", now);
      let next = now.split("");
      for (let i = 0; i < now.length; i++) {
        let temp = next[i];
        next[i] = ".";
        let regex = new RegExp(next.join(""), "g");
        console.log(regex);
        let filtered = words.filter((x) => x.match(regex));
        if (filtered.length) {
          console.log("filterd", now, filtered);
          filtered.forEach((element) => {
            dfs(element, words, target, count + 1);
          });
        }
        return;
        next[i] = temp;
      }
    }
  }
  return min;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
