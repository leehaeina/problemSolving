const resultSet = new Set();
const dfs = (caseArray, level, caseSet) => {
  if (level === caseArray.length) {
    return resultSet.add([...caseSet].sort().join(""));
  } else {
    caseArray[level].reduce((_, v, i) => {
      let next = new Set([...caseSet, v]);
      if (next.size !== caseSet.size) {
        dfs(caseArray, level + 1, next);
      }
    }, "");
  }
};
function solution(user_id, banned_id) {
  var answer = 0;
  let candidate_id = [];
  banned_id = banned_id.map((x) => x.replace(/\*/g, "[a-z0-9]"));
  banned_id.forEach((element) => {
    let regex = new RegExp(`\\b${element}\\b`, "g");

    candidate_id.push(user_id.filter((x) => x.match(regex)));
  });

  dfs(candidate_id, 0, new Set());

  return resultSet.size;
}
