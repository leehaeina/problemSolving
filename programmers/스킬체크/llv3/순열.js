function getPermutation(
    arr ,
    r  ,
    tmp  = [], // 순열 중 하나를 임시로 저장할 배열
    ans = [],// 순열이 저장될 배열
    isUsed = new Set()
) {
    // 순열 중 하나가 완성된 경우.
    if( tmp.length === r ) {
         ans.push(tmp);
         return ans;
    }
    // 사용되지 않은 요소 중 하나를 사용한다.
    for(let i=0; i<arr.length; i++) {
        if(isUsed.has(i)) continue; // 배열에 들어와있으면 무시하고 다른거 넣기 (이게 있으니까 더 큰 숫자가 앞에 와도 무방한것!)
        isUsed.add(i); //없는 숫자면 집어넣기 
        tmp.push(arr[i]); 
        getPermutation(arr, r, tmp, ans, isUsed);// 지금까지 갖고있는걸로 순열 돌리기
        tmp.pop(); //완성된 순열이었으면 한자리 빼고 나머지 자리로 채우기 
        isUsed.delete(i);
    } // 만약 끝까지 숫자를 순회한 경우 탈출해서 다른 자리로 바꾸기 위해 리턴한다. 
    return ans;
}
//
// [1, 2, 3, 4] 에서 3개를 선택.
const permutation = getPermutation([1, 2, 3, 4], 3); 

function getCombination(
    arr ,
    r  ,
    tmp    = [], // 조합 중 하나를 임시로 저장할 배열
    ans = [], // 조합이 저장될 배열
) {
    // 조합 중 하나가 완성된 경우.
    if( tmp.length === r ) {
         ans.push(tmp);
         return ans;
    }
    // 마지막으로 사용한 요소의 다음 것 부터 사용한다.
    const lastIndex = tmp.length === 0 ? -1 : tmp[tmp.length-1]; 
    for(let i=lastIndex+1; i<arr.length; i++) {
        tmp.push(arr[i]);
        getCombination(arr, r, tmp, ans);
        tmp.pop();
    }
    return ans;
}
//
// [1, 2, 3, 4] 에서 3개를 선택.
const combination = getCombination([1, 2, 3, 4], 3); 