//순열
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v; // 맨앞에꺼 하나 떼고
    const restArr = arr.filter((_, index) => index !== idx); //뗀거를 뺸 나머지 배열
    const permuationArr = permutation(restArr, selectNum - 1); //그거를 돌리기
    const combineFixer = permuationArr.map((v) => [fixer, ...v]); //결과랑 앞에 픽서랑 붙이기
    result.push(...combineFixer);
  });
  return result;
}
//조합
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1); //선택한 모든것은 빼야해서 뒤로만!
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
//중복순열
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr; // 자기자신 뺄 필요가없어 중복가능이라
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

//조합 간단히 dfs로
let answer = [];

const dfs = (nums, num, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === 3) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  }
};
dfs([1, 2, 3, 4], 0);
console.log(answer); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

function permi(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((x) => [x]);
  arr.forEach((v, i, arr) => {
    let fixer = v;
    let restArr = arr.slice(i + 1);
    let permuationArr = permi(restArr, selectNum - 1);
    let combineFix = permuationArr.map((x) => [fixer, ...x]);
    result.push(...combineFix);
  });
  return result;
}

resultSet = new Set();

const dfs = (caseArray, level, caseSet) => {
  if (level === caseArray.length) {
    return resultSet.add([...caseSet].sort().join(""));
    //{crodo,frodo},{frodo,crodo} 같이 중복이지만 순서가 다른경우도 중복처리해주시 위해 sort 후 문자열로 합쳐버린다.
  }

  for (let elem of caseArray[level]) {
    const next = new Set([...caseSet, elem]);
    // caseSet 과 next 의 size 가 같다는 말은, set 에 넣었지만 무시되었다는 말로,
    //중복이 발생했다는 의미입니다.
    //즉 해당 케이스는 찾아 볼 필요도 없이 불가능한 케이스입니다.
    if (next.size !== caseSet.size) {
      dfs(caseArray, level + 1, next);
    }
  }
};
let setResult = [];
function permu(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((x) => [x]);
  else {
    arr.forEach((v, i, arr) => {
      let fixer = v;
      let restArr = arr.filter((_, idx) => i != idx);
      let permuationArr = permu(restArr, selectNum - 1);
      let combine = permuationArr.map((x) => [fixer, ...x]);
      setResult.push([...combine]);
    });
  }
}
permu([1, 2, 3], 2);
console.log("permu", setResult);

let diff = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
function dfs(x, y) {
  if (x < 0 || y < 0 || x > n || y > m) return false;
  else if (graph[x][y] === 0) graph[x][y] = 1;
  for (let i = 0; i < diff.length; i++) {
    let nx = x + diff[i][0];
    let ny = y + diff[i][1];
    dfs(nx, ny);
  }
  return true;
}
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) if (dfs(x, y)) count++;
}

var answer = 0;
var arr = [];
var target = 5;
function recur(count, sum) {
  if (count === arr.length) if (sum === target) answer++;
  return;
  recur(count + 1, sum + arr[count]);
  recur(count + 1, sum - arr[count]);
}

//여러배열에서 조합하기
const result = [];
const dfs = (caseArray, level, caseSet) => {
  if (level === caseArray.length) {
    return result.push([...caseSet]);
  } else {
    caseArray[level].reduce((_, v, i) => {
      let next = [...caseSet, v];
      dfs(caseArray, level + 1, next);
    }, "");
  }
};
dfs(
  [
    [a, b, c],
    [a, c, b],
    [f, g, h],
  ],
  0,
  []
);
//result 가 결과배열이 된다.
result = [];
function dfs(caseArray, level, caseSet) {
  if (level === caseArray.length) {
    //caseArray 는 안바뀜. 이 배열크기만큼 === 하나씩 배열에서 다뽑으면 끝남
    return result.push([...caseSet]);
  } else {
    caseArray[level].reduce((_, v, i) => {
      let next = [...caseSet, v];
      dfs(caseArray, level + 1, next);
    }, "");
  }
}

// 배열들 중에 중복 안돼
var resultSet = new Set();
function dfs(caseArr, level, caseSet) {
  if (level === caseArr.length) {
    return result.add([...caseSet].sort().join(""));
  } else {
    caseArr[level].reduce((_, v, i) => {
      let next = new Set([...caseSet, v]);
      if (next.size !== caseSet.size) {
        dfs(caseArr, level + 1, next);
      }
    });
  }
}
