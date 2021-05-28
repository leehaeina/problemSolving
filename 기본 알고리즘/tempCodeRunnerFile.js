let str_replace = "123456";
let replaced = str_replace.replace("123", "012");
console.log(str_replace, replaced);
str_replace = str_replace + str_replace;
console.log(str_replace.replace(/123/g, "012"));
let arr = str_replace.split("");
console.log(arr.replace("1", "a"));