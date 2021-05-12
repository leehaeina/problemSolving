//순열
function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
  
    arr.forEach((v, idx, arr) => {
      const fixer = v;// 맨앞에꺼 하나 떼고 
      const restArr = arr.filter((_, index) => index !== idx); //뗀거를 뺸 나머지 배열
      const permuationArr = permutation(restArr, selectNum - 1);//그거를 돌리기 
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);//결과랑 앞에 픽서랑 붙이기
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
      const restArr = arr.slice(idx + 1);//선택한 모든것은 빼야해서 뒤로만!
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