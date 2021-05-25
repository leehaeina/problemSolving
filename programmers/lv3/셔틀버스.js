function solution(n, t, m, timetable) {
  let answer = "";
  //* getMinutes : 시간 형식을 분으로 바꾸는 함수
  const getMinutes = (n) => {
    return n.split(":")[0] * 60 + n.split(":")[1] * 1;
  };
  //* getAnswer는 분을 시간포맷으로 바꾸는 함수
  const getAnswer = (n) => {
    let h = parseInt(n / 60);
    let m = n % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  };
  //* bus 시간표
  let bus = Array(n)
    .fill(0)
    .map((x, i) => [540 + i * Number(t)]);
  //*timetable에서 분단위로 변경 -> 소팅 -> 못타는애들 지우기
  timetable = timetable.map((x) => getMinutes(x));
  timetable = timetable.sort((a, b) => a - b).filter((x) => x <= bus[n - 1][0]);
  //* answer 디폴트는 맨 마지막 버스
  answer = bus[n - 1][0];
  for (let i = 0; i < n; i++) {
    //* 버스마다 탈수있는 인원 카운팅
    let count = timetable.filter((x) => x <= bus[i][0]).length;
    //* 만약에 맨 마지막 버스가 다 찬 경우엔 맨 마지막사람보다 1분 빠르게
    if (i === n - 1 && count >= m) {
      answer = timetable[m - 1] - 1;
    }
    //* 버스 하나 보낼떄마다 탄 사람 지워주기! 카운트가 탈수있는 사람보다 많으면 탈수있는 만큼만 지우기
    timetable.splice(0, count > m ? m : count);
  }
  return getAnswer(answer);
}
