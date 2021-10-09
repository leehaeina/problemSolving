function solution(n) {
    var answer = 0;
    let changed = n.toString(3).split("").reverse().join("");
    return parseInt(changed,3);
}