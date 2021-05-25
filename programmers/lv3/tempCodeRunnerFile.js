function solution(lines) {
  var answer = 0;
  let timeArr = [];
  let totalList = [];
  timeArr = lines.reduce((acc, line, i) => {
    let x = line.split(" ");
    let time = Number(x.pop().slice(0, -1));
    console.log(time);
    let end = new Date(x);
    let start = new Date();
    start.setTime(end.getTime() - time * 1000 + 1);
    if (start < new Date("2016-09-15 00:00:0.000"))
      start = new Date("2016-09-15 00:00:0.000");
    totalList.push(start);
    totalList.push(end);
    acc.push([start, end]);
    return acc;
  }, []);
  let max = 0;
  let count = 0;
  let left = [];
  let last;
  totalList.sort();
  for (let i = 0; i < totalList.length; i++) {
    let now = totalList[i];
    let last = new Date(now.getTime() + 999);
    console.log(now, last);
    // count = timeArr.reduce((count, x) => {
    //   if (x[0] <= now && x[0] <= last) {
    //     count++;
    //   } else if (x[1] <= now && x[1] <= last) count++;
    //   return count;
    // }, 1);
    count = timeArr.filter(
      (x) => (x[0] >= now && x[0] <= last) || (x[1] >= now && x[1] <= last)
    ).length;
    if (count > answer) answer = count;
  }
  //   timeArr.reduce((_, v, i) => {
  //     let last = new Date();
  //     last.setTime(v[0].getTime() + 999);
  //     let range = [v[0], last];
  //     console.log("range", range, "timeArr", timeArr);
  //     let rest = timeArr.filter((x) => x[0] >= range[0]);
  //     count = left.filter((x) => range[0] <= x).length;
  //     console.log(rest, count);
  //     for (let i = 0; i < rest.length; i++) {
  //       console.log(range[1], rest);
  //       if (range[1] > rest[i][0]) count++;
  //       if (rest[i][0] > range[1]) break;
  //     }
  //     if (count > answer) answer = count;
  //     timeArr = timeArr.filter((x) => x[0] > range[0]);
  //   }, []);

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