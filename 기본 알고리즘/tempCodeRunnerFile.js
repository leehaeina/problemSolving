let str = "0123456789";
let a = str.substr(0, 1);
console.log(a, str); //! a는 0부터 1개 잘라짐, 원본 문자열은 그대로임
let b = str.substr(3,2);
console.log(b)