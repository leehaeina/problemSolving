function solution(s) {
  var answer = [];
  s.reduce((_, str) => {
    let str110 = ""; //! 110 모으는 배열
    let start11 = 0; 
    let stack = [];
    
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "0" &&
        stack.slice(stack.length - 2, stack.length).join("") === "11"
      ) {
        str110 += "110";
        stack.pop();
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    str = stack.join("");

    start11 = str.indexOf("11");
    if (start11 !== -1) {
      str = str.slice(0, start11) + str110 + str.slice(start11, str.length);
      answer.push(str);
    } else if (str[str.length - 1] === "1") {
      str = str.slice(0, str.length - 1) + str110 + "1";
      answer.push(str);
    } else {
      answer.push(str + str110);
    }
  }, "");
  return answer;
}
