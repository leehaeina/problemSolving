function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) {
    return arr.map((x) => [x]);
  } else {
    arr.forEach((v, i) => {
      let fixer = v;
      let rest = arr.slice(i + 1);
      let combiArr = combination(rest, selectNum - 1);
      let combin = combiArr.map((x) => [fixer, ...x]);
      result.push(...combin);
    });
    return result.sort();
  }
}
// function combination(arr, selectNum) {
//     const result = [];
//     if (selectNum === 1) return arr.map((v) => [v]);
//     arr.forEach((v, idx, arr) => {
//       const fixed = v;
//       const restArr = arr.slice(idx + 1); //선택한 모든것은 빼야해서 뒤로만!
//       const combinationArr = combination(restArr, selectNum - 1);
//       const combineFix = combinationArr.map((v) => [fixed, ...v]);
//       result.push(...combineFix);
//     });
//     return result;
//   }
function solution(orders, course) {
  var answer = [];
  let foods = [];
  let count = [];
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course; j++) {
        let map = {}
      let combi = combination(orders[i].split(""), course[j]);
      for(let x = 0; x<combi.length;x++)
      {
          if(map[combi[x]]) map[combi[x]]++;
          else map[combi[x]] = 1
      }
      
    }
  }

  return answer;
}
console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
