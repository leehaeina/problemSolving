function solution(user_id, banned_id) {
  var answer = 0;
  let candidate_id = [];
  banned_id = banned_id.map((x) => x.replace(/\*/g, "[a-z0-9]"));
  banned_id.forEach((element) => {
    let regex = new RegExp(`\\b${element}\\b`, "g");
    console.log(regex);
    candidate_id.push(user_id.filter((x) => x.match(regex)));
  });
  console.log(candidate_id);
  console.log(banned_id);
  answer = candidate_id.reduce((acc, cur) => {
    return acc * cur.length;
  }, 1);
  return answer;
}
console.log(
  solution(
    ["frodo", "froodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "abc1**"]
  )
);
let summer = ['a','b','c']