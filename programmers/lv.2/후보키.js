function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) {
    return arr.map((x) => [x]);
  } else {
    arr.forEach((x, i) => {
      let fixer = x;
      let rest = arr.slice(i + 1);
      let combi = combination(rest, selectNum - 1);
      let combine = combi.map((x) => [fixer, ...x]);
      result.push(...combine);
    });
    return result;
  }
}

function solution(relation) {
  var answer = 0;
  let relationArr = Array.from(
    Array(relation[0].length),
    () => new Array(relation.length)
  );
  let keys = Array(relation[0].length)
    .fill(0)
    .map((x, i) => i);
  let count = 1;
  let combiArr = [...keys];
  while (1) {
    let set = new Set();
    for (let i = 0; i < relationArr.length; i++) {
      set.add(relation[0].filter((x, i) => arr.includes(i)).join(""));
    }
    if (set.size === relation.length) {
      answer++;
    }
    if (keys.length >= count) {
        combiArr = combination(keys, count).filter(x=>{
            
        });
        
    }

  }

  return answer;
}
let relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];
let arr = [0, 1];

console.log(comnine);
