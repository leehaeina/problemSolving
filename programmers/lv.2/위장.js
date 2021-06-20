function solution(clothes) {
    var answer = 1;
    let map = {};
    for (let i = 0; i < clothes.length; i++) {
        let [name, type] = clothes[i];
        if (map[type]) map[type].push(name);
        else map[type] = [name];
    }
    let keys = Object.keys(map);
    //console.log(keys)
    for (let i = 0; i < keys.length; i++) {
        answer *= map[keys[i]].length + 1;
    }
    return answer - 1;
}
