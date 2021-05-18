function solution(numbers) {
  var answer = [];
  numbers.reduce((_, number) => {
    let count = 0;
    let binary = number
      .toString(2)
      .split("")
      .map((x) => Number(x));
    if (!binary.includes(0)) {
      binary.unshift(1);
      binary[1] = 0;
      answer.push(parseInt(binary.join(""), 2));
    } else {
      if (binary[binary.length - 1] === 0) {
        binary[binary.length - 1] = 1;
        answer.push(parseInt(binary.join(""), 2));
      } else {
        for (let i = binary.length - 2; i >= 0; i--) {
          if (binary[i] === 0) {
            binary[i] = 1;
            binary[i + 1] = 0;
            break;
          }
        }
        answer.push(parseInt(binary.join(""), 2));
      }
    }
  }, "");
  return answer;
}
