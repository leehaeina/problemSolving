function solution(gems) {
  var answer = [];
  let list = new Map();
  const map = new Map();
  const set = new Set([...gems]).size;

  for (let i = 0; i < gems.length; i++) {
    //* 삭제하고 다시 세팅해야 맨 앞이 가장 작은 인덱스가 된다
    map.delete(gems[i]);
    map.set(gems[i], i + 1);

    if (map.size === set) {
      //* 맨 앞이 시작부분!
      let min = map.values().next().value;
      let max = i + 1;
      if (answer.length) {
        if (answer[1] - answer[0] > max - min) answer = [min, max];
      } else {
        answer = [min, max];
      }
    }
  }

  return answer;
}
