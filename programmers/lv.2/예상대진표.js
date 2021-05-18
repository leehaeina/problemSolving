function solution(n, a, b) {
  var answer = 0;
  let arr = Array(n)
    .fill(0)
    .map((x, index) => index + 1);
  let temp = [];
  while (1) {
    temp = [];
    console.log(arr);
    answer++;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === a || arr[i] === b) {
        if (i % 2 === 0 && (arr[i + 1] === a || arr[i + 1] === b)) {
          return answer;
        }
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[i + 1]);
        i++;
      }
    }
    arr = [...temp];
  }

  return answer;
}
console.log(solution(8, 4, 7));
