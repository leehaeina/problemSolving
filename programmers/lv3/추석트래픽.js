function solution(lines) {
  var answer = 0;
  let timeArr = [];
  let totalList = [];
  //* timeArr는 모든 실행을 시작과 끝으로 나눠서 짝맞춰 넣은 배열
  //* totalList는 모든 실행의 시작과 끝을 넣은 배열 => 이때 데이터가 변하므로 그부분 조사!
  timeArr = lines.reduce((acc, line, i) => {
    let x = line.split(" ");
    let time = Number(x.pop().slice(0, -1));
    let end = new Date(x).getTime();
    let start = end - time * 1000 + 1;
    totalList.push(start);
    totalList.push(end);
    acc.push([start, end]);
    return acc;
  }, []);
  let count = 0;
  for (let i = 0; i < totalList.length; i++) {
    //* now는 1초 계산의 시작부분, last는 끝나는 부분
    let now = totalList[i];
    let last = now + 999;
    //* 1.1초 사이에 프로세스가 시작할때
    //* 2.1초 사이에 프로세스가 끝날때
    //* 3.프로세스가 1초를 품고있을때
    count = timeArr.filter(
      (x) =>
        (x[0] >= now && x[0] <= last) ||
        (x[1] >= now && x[1] <= last) ||
        (x[0] <= now && x[1] >= last)
    ).length;
    if (count > answer) answer = count;
  }
  return answer;
}
console.log(
  solution([
    "2016-09-15 01:00:07.000 2s",
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:03.001 0.50s",
    "2016-09-15 01:00:03.001 0.001s",
  ])
);
console.log(
  new Date("2016-09-15 01:00:04.001") < new Date("2016-09-15 01:00:04.001")
);
// let line = new Date("2016-09-15 01:00:04.001");
// console.log(line);
// line.setTime(line.getTime() - 2 * 1000 + 1);
// console.log(line);
// console.log(line.getTime());

// let z = "0.02s";
// z = z.slice(0, -1);
// console.log(z);

let arr = [
  [1, 2],
  [2, 3],
  [0, 1],
];
console.log(arr.filter((x) => x[1] >= 2 || x[0] < 0));
console.log(new Date("12-12-12 20:13:00").getUTCHours());
console.log(new Date("2016-09-15 01:00:04.001"));
