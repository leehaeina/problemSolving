let date = new Date(2019, 0, 1);
console.log("기준일자 : " + date + "<br>");

date.setMinutes(date.getMinutes() + 100);
console.log("100분 후 : " + date + "<br>");

date = new Date(2019, 0, 1);
date.setMinutes(date.getMinutes() - 100);
console.log("100분 전 : " + date + "<br>");

console.log(date.getHours(), date.getMinutes());

let time = ["09:10", "09:09", "08:00"];
time = time.map((x) => x.split(":").map((x) => Number(x)));
console.log(time);
date = new Date(2001, 1, 1, ...time[0]);
console.log(date);
