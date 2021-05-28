const resultSet = new Set();
const result = [];

function dfs(caseArray, level, caseSet) {
    if (level === caseArray.length) {
        //caseArray 는 안바뀜. 이 배열크기만큼 === 하나씩 배열에서 다뽑으면 끝남
        result.push([...caseSet]);
        return;
    } else {
        caseArray[level].reduce((_, v, i) => {
            let next = [...caseSet, v];
            dfs(caseArray, level + 1, next);
        }, "");
    }
}
function solution(user_id, banned_id) {
    var answer = 0;
    let candidate_id = [];
    
    banned_id = banned_id.map((x) => x.replace(/\*/g, "[a-z0-9]"));
    console.log(banned_id);
    banned_id.forEach((element) => {
        let regex = new RegExp(`\\b${element}\\b`, "g");

        candidate_id.push(user_id.filter((x) => x.match(regex)));
    });
    console.log(candidate_id);
    dfs(candidate_id, 0, []);

    return result;
}
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "*rodo", "******", "******"]
    )
);

