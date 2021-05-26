function toNumber(time) {
    return (
        time.split(":")[0] * 3600 +
        time.split(":")[1] * 60 +
        time.split(":")[2] * 1
    );
}
function toTime(number) {
    let h = parseInt(number / 3600);
    let m = parseInt((number % 3600) / 60);
    let s = (number % 3600) % 60;
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
    let max = 0;
    play_time = toNumber(play_time);
    adv_time = toNumber(adv_time);
    let arr = Array(play_time).fill(0);

    logs.reduce((_, log, i) => {
        let start = toNumber(log.split("-")[0]);
        let end = toNumber(log.split("-")[1]);
        arr[start]++;
        arr[end]--;
    }, "");

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i];
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i];
    }
    let sum = arr[adv_time - 1];
    for (let i = 0; i <= arr.length - adv_time; i++) {
        if (sum < arr[i + adv_time] - arr[i]) {
            sum = arr[i + adv_time] - arr[i];
            answer = i + 1;
        }
    }

    return toTime(answer);
}
