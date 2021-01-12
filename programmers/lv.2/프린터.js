function solution(priorities, location) {
    var answer = 0;
    const result = [];
    const arr = [];
    for (let i = 0; i < priorities.length; i++) {
      arr.push({ location: i, priorities: priorities[i] });
    }
    while (arr.length) {
      let j = 0;
      if (arr.some((v, index) => v.priorities > arr[j].priorities)) {
        const first = arr.shift();
        arr.push(first);
      } else {
        const first = arr.shift();
        result.push(first.location);
      }
    }
    console.log(result);
    return result.indexOf(location) + 1;
  }