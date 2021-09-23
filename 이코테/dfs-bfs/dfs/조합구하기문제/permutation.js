function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
  
    arr.forEach((v, idx, arr) => {
      const fixer = v; // 맨앞에꺼 하나 떼고
      const restArr = arr.filter((_, index) => index !== idx); //뗀거를 뺸 나머지 배열
      console.log("fixer",fixer)
      const permuationArr = permutation(restArr, selectNum - 1); //그거를 돌리기
      console.log("9",fixer,permuationArr);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]); //결과랑 앞에 픽서랑 붙이기
      result.push(...combineFixer);
      console.log("result",fixer,result)
    });
    return result;
  }
console.log(permutation([1,2,3,4],3));