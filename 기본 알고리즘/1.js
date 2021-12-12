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
//console.log(permutation([1,2,3,4,5],10))


const list = ['a', 'b', 'c', 'd', 'e'];
const pick = 3;
const result = [];

function pwr(items) {
  if(items.length === pick) {
    result.push(items);
    return;
  }

  for (let i = 0; i < list.length; i ++) {
    pwr(`${items}${list[i]}`);
  }
}

pwr('');
function arrPir(arr, r) {
    let res = [];
    let tmp = [];
    // let cnt = 0;
    function DFS(L) {
      if (L === r) {
        res.push(tmp.slice());
        // cnt++;
      } else {
        for (let i = 0; i < arr.length; i++) {
          // L차 순회하며 각 자리에 v 입력
          tmp[L] = arr[i];
          DFS(L + 1);
        }
      }
    }
    DFS(0);
    // return cnt;
    return res;
  }
console.log(arrPir([1,2,3,4,5],10))

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

console.log(combination([0,1,2,3,4,5,6],2))

7 12 2
7 2
5 4
6 4
4 3
3 7
1 6
6 7
5 3
6 5
5 7
4 2
4 7
7 6 3

4

13 11 8
6 9
10 12
9 8
11 1
3 11
8 7
7 5
1 2
2 6
5 4
4 13
8 12 3

-1

10 11 7
8 4
1 5
3 10
2 3
9 7
7 2
10 1
2 8
6 3
9 8
4 6
3 7 1

16