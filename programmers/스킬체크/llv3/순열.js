function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}
//console.log(permutation([1, 2, 3, 4], 3));

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    console.log("combinationArr", combinationArr, "restArr", restArr);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    console.log("combine", combineFix);
    result.push(...combineFix);
    console.log("result", result);
  });
  return result;
}
function combi(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((x) => [x]);
  else {
    arr.forEach((v, i, arr) => {
      let fixer = v;
      let restArr = arr.slice(i + 1);
      let combinationArr = combi(restArr, selectNum - 1);
      let combineFix = combinationArr.map((x) => [fixer, ...x]);
      result.push(...combineFix);
    });
    return result;
  }
}
console.log(combi([1, 2, 3, 4], 3));

function permi2(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((x) => [x]);
  //끝까지 온 경우
  else {
    arr.forEach((v, i, arr) => {
      // 한번 순회한 경우
      let fixer = v;
      let restArr = arr.filter((_, index) => index != i);
      let permuationArr = permi(restArr, selectNum - 1);
      console.log("permu", permuationArr);
      let combineFix = permuationArr.map((v) => [fixer, ...v]);
      console.log("combine", combineFix);
      result.push(...combineFix);
      console.log("result", result);
    }); //서브 태스크가 완료 된 이후 리턴한다 한번에 저장하려구!!
    return result;
  }
}

function permi(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((v, i, arr) => {
      let fixer = v;
      let restArr = arr.filter((_, index) => index != i);
      let permuationArr = permi(restArr, selectNum - 1);
      let combine = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combine);
    });
    return result;
  }
}

//console.log(permi([1, 2, 3, 4], 4));
