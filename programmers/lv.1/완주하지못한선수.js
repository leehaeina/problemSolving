function solution(participant, completion) {
    var answer = "";
    let map = {};

    for (let i = 0; i < completion.length; i++) {
        if (map[completion[i]]) map[completion[i]]++;
        else map[completion[i]] = 1;
    }

    for (let i = 0; i < participant.length; i++) {
        if (map[participant[i]]) map[participant[i]]--;
        else {
            answer = participant[i];
        }
    }
    return answer;
}
