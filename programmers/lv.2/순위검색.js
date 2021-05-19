let info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
let query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

function solution(info, query) {
  let answer = [];
  infoMap = {};

  info.reduce((_, v, i) => {
    let divided = v.split(" ");
    let score = divided.pop();
    divided = divided.map((x) => [x, "-"]);
    combination(divided, 0, [], Number(score));
  }, "");

  query.reduce((_, v) => {
    let str = v.split(" and ");
    console.log(str);
    let [tail, score] = str.pop().split(" ");
    console.log(tail);
    str.push(tail);
    str = str.join("");
    console.log(str);
    if (infoMap[str]) {
      console.log(infoMap[str]);
      answer.push(infoMap[str].filter((x) => x >= Number(score)).length);
    } else answer.push(0);
  }, "");

  function combination(arr, level, caseArr, score) {
    if (arr.length === level) {
      if (infoMap[[...caseArr].join("")]) {
        infoMap[[...caseArr].join("")].push(score);
      } else infoMap[[...caseArr].join("")] = [score];
      return;
    } else {
      arr[level].reduce((_, v, i) => {
        let next = [...caseArr, v];
        combination(arr, level + 1, next, score);
      }, "");
    }
  }

  return answer;
}
console.log(solution(info, query));
console.log(1 == "1");

function solution(info, query) {
  const answer = [];
  const infoMap = new Map();

  function combination(array, score, start) {
    const key = array.join("");
    //const value = infoMap[key];

    //console.log(array,key,value,)
    if (infoMap.has(key)) {
      //infoMap[key].push(score);
      infoMap.set(key, [...infoMap.get(key), score]);
    } else {
      //infoMap[key] = [score];
      infoMap.set(key, [score]);
    }
    //console.log(infoMap[key])
    for (let i = start; i < array.length; i++) {
      const temp = [...array];
      temp[i] = "-";
      combination(temp, score, i + 1);
    }
  }

  for (const e of info) {
    const splited = e.split(" ");
    const score = Number(splited.pop());
    combination(splited, score, 0);
  }

  for (const key of infoMap.keys()) {
    //infoMap[key] = infoMap[key].sort((a, b) => a - b);
    infoMap.get(key).sort((a, b) => a - b);
  }

  for (const e of query) {
    // replace는 치환 뒤에 g는 전체경우
    const splited = e.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    //const array = infoMap[key];
    const array = infoMap.get(key);
    if (array) {
      //console.log(key,infoMap.get(key))
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] >= score) {
          end = mid;
        } else if (array[mid] < score) {
          start = mid + 1;
        }
      }

      const result = array.length - start;
      // for (let i =0;i<array.length;i++)
      // {
      //     if(score<=array[i]) start++;

      // }
      answer.push(result);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

// function solution(info,query){
//     let answer;
//     let infoMap = new Map();
//     function combination(arr,score,start){
//         let key = arr.join("")
//         //arr, key  = [ 'java', 'backend', 'junior', 'pizza' ] javabackendjuniorpizza
//         if(infoMap.has(key)){
//             infoMap.set(key,[...infoMap.get(key),score])
//         }
//         else{
//             infoMap.set(key,[score])
//         }

//     }
//     for (let i = 0; i<info.length;i++){
//         let arr = info[i].split(" ")
//         let score = arr.pop()
//         combination(arr,score,0)
//     }
//     return answer
// }

function solution(info, query) {
  let answer = [];
  let infoMap = {};

  info.reduce((_, v, i) => {
    let divided = v.split(" ");
    let score = divided.pop();
    divided = divided.map((x) => [x, "-"]);
    combination(divided, 0, [], Number(score));
  }, "");
  for (const key of Object.keys(infoMap)) {
    infoMap[key].sort((a, b) => a - b);
  }
  query.reduce((_, v) => {
    const splited = v.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const str = splited.join("");

    const array = infoMap[str];

    if (array) {
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] >= score) {
          end = mid;
        } else if (array[mid] < score) {
          start = mid + 1;
        }
      }

      const result = array.length - start;
      answer.push(result);
    } else {
      answer.push(0);
    }
  }, "");

  function combination(arr, level, caseArr, score) {
    if (arr.length === level) {
      if (infoMap[[...caseArr].join("")]) {
        infoMap[[...caseArr].join("")].push(score);
      } else infoMap[[...caseArr].join("")] = [score];
      return;
    } else {
      arr[level].reduce((_, v, i) => {
        let next = [...caseArr, v];
        combination(arr, level + 1, next, score);
      }, "");
    }
  }

  return answer;
}

let arr = [2, 1, 3, 4, 5];
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));
