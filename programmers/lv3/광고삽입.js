function time(time) {
    let splited = time.split(":");
    return splited[0] * 3600 + splited[1] * 60 + splited[2] * 1;
}
function toTime(answer) {
    let h = parseInt(answer / 3600);
    let m = parseInt((answer % 3600) / 60);
    let s = parseInt((answer % 3600) % 60);
    return (
        String(h).padStart(2, "0") +
        ":" +
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0")
    );
}
function solution(play_time, adv_time, logs) {
    var answer = "";
    play_time = time(play_time);
    adv_time = time(adv_time);
    answer = play_time;
    let totalList = [];
    let max = 0;
    let logsArr = logs.reduce((acc, x) => {
        let splited = [time(x.split("-")[0]), time(x.split("-")[1])];
        acc.push(splited);
        totalList.push(...splited);
        return acc;
    }, []);
    totalList.sort((a, b) => a - b);

    let first = totalList[0];
    let last = totalList[totalList.length - 1];
    if (last - first < adv_time) {
        if (last - adv_time >= 0) return toTime(last - adv_time);
        else return "00:00:00";
    }

    for (let i = 0; i < totalList.length; i++) {
        let start = totalList[i];
        let end = start + adv_time;

        let filtered = logsArr.reduce((acc, x, i) => {
            if (x[0] <= start && x[1] >= end) {
                acc += adv_time;
            } else if (x[0] >= start && x[0] <= end) {
                let e = end > x[1] ? x[1] : end;
                acc += e - x[0];
            } else if (x[1] >= start && x[1] <= end) {
                acc += x[1] - start;
            }
            return acc;
        }, 0);
        if (max < filtered) {
            max = filtered;
            answer = start;
        }
        // if (max === filtered) {
        //     answer = answer > start ? start : answer;
        // }
    }

    return toTime(answer);
}

console.log(
    solution("02:03:55", "00:14:15", [
        "01:20:15-01:45:14",
        "00:25:50-00:48:29",
        "00:40:31-01:00:00",
        "01:37:44-02:02:30",
        "01:30:59-01:53:29",
    ])
);
console.log(
    solution("99:59:59", "25:00:00", [
        "69:59:59-89:59:59",
        "01:00:00-21:00:00",
        "79:59:59-99:59:59",
        "11:00:00-31:00:00",
    ])
);
