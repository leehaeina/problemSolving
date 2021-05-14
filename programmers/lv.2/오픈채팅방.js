function solution(record) {
  var answer = [];
  let id = new Map();
  for (let i = 0; i < record.length; i++) {
    let arr = record[i].split(" ");

    if (arr[0] === "Enter") {
      id.set(arr[1], arr[2]);

      answer.push([arr[1], `님이 들어왔습니다.`]);
    } else if (arr[0] === "Change") {
      id.set(arr[1], arr[2]);
    } else {
      answer.push([arr[1], `님이 나갔습니다.`]);
    }
  }

  answer = answer.map((x) => `${id.get(x[0])}` + x[1]);

  return answer;
}
