//! substr(start,length) =>
//?인덱스 a 부터 b개 잘라짐,
//? 원본배열 변화없음,
//?끝부터 짜르기 불가능
let str = "0123456789";
let a = str.substr(0, 1);
console.log(a, str); //! a는 0부터 1개 잘라짐, 원본 문자열은 그대로임
let last = str.substr(str.length - 1, 3);
//! 끝에서 부터 3개 해도 끝이 마지막이라 마지막 문자 1개밖에 리턴 안됨
console.log(last, str);

//! substring(start,emd)
//? start ~ end까지 잘림
//? 원본 문자열 변화없음
//* if(start>end) substring(end,start)알아서 바꿔줌 똑똑쓰~
//* if( start or end <0) 0으로 바뀜!
let str_substring = "0123456789";
let first = str_substring.substring(0, 2);
console.log("substring", first, str_substring); //! 01

//!slice(start,end)
//? start ~ end까지 잘림
//? 원본 문자열 변화없음
//* if(start>end) return "" 빈배열 리턴함
//* if(start or end <0) 뒤에서부터의 길이 ex -2 : 뒤에서부터 2개
let str_slice = "0123456789";
let sliced = str_slice.slice(-2); //!뒤에서부터 2개
console.log(sliced, str_slice); //89
console.log(str_slice.slice(1, -4));

//!splice(start,deleteCount,item1...)
//? 배열만 가능!!! 스트링 불가능
//? 삭제 또는 교체 또는 추가
//? 리턴 : 제거한 요소를 담은 배열
//? 원본배열이 변한다!
let str_splice = "0123456789".split("");
let spliced = str_splice.splice(3, 5, "a", "b"); //! 3부터 5개를 자르고 그 자리에 'a','b'가 들어간다.
console.log(str_splice, spliced);

//!replace(str,str1)
//?원본 안바뀜 
//? 정규표현식 가smd!


//TODO 결론 : 자를땐 slice(start,end) or substr(start,length) => 원본배열은 안바뀐다.
//TODO  splice는 배열에서만 가능, 원본배열 바뀐다!
