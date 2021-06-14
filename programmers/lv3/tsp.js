// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//     input.push(line);
// }).on("close", () => {
//     const n = Number(input.shift());
//     const arr = [];
//     const visitied = [];
//     const output = [];
//     let result = Infinity;

//     let count = 0;
//     for (let i = 0; i < input.length; i++) {
//         arr.push(input[i].split(" ").map((num) => Number(num)));
//     }

//     dfs(0);

//     console.log(result);

//     function dfs(cnt) {
//         if (cnt === n) {
//             console.log(output);
//             let tmp = 0;

//             // 도시들의 이동 비용을 순서대로 더해준다.
//             for (let i = 1; i < output.length; i++) {
//                 // 이전 도시에서 현재 도시로 오는데 든 비용을 더해준다.
//                 tmp += arr[output[i - 1]][output[i]];
//             }

//             // 마지막 도시에서 출발 도시로 돌아가는 비용을 더해준다.
//             // output 배열의 가장 마지막 도시에서 => 가장 첫번째 도시로
//             if (arr[output[output.length - 1]][output[0]] !== 0) {
//                 tmp += arr[output[output.length - 1]][output[0]];
//             } else {
//                 tmp = Infinity;
//             }

//             // 이전의 비용가 비교한다.
//             result = Math.min(result, tmp);
//             return;
//         }
//         for (let i = 0; i < arr.length; i++) {
//             if (visitied[i]) continue;
//             if (output.length > 0 && arr[output[output.length - 1]][i] === 0)
//                 continue;
//             visitied[i] = true;
//             output.push(i);
//             dfs(cnt + 1);
//             output.pop();
//             visitied[i] = false;
//         }
//     }

//     process.exit();
// });
function solution(n, arr) {
    const visitied = [];
    const output = [];
    let result = Infinity;
    let answer = [];
    dfs(0);
    console.log(result, answer);
    function dfs(cnt) {
        if (cnt === n) {
            console.log(output);
            let tmp = 0;

            // 도시들의 이동 비용을 순서대로 더해준다.
            for (let i = 1; i < output.length; i++) {
                // 이전 도시에서 현재 도시로 오는데 든 비용을 더해준다.
                tmp += arr[output[i - 1]][output[i]];
            }

            // 마지막 도시에서 출발 도시로 돌아가는 비용을 더해준다.
            // output 배열의 가장 마지막 도시에서 => 가장 첫번째 도시로
            if (arr[output[output.length - 1]][output[0]] !== 0) {
                tmp += arr[output[output.length - 1]][output[0]];
            } else {
                tmp = Infinity;
            }

            // 이전의 비용가 비교한다.
            if (result < tmp) answer = [...output];
            result = Math.min(result, tmp);

            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (visitied[i]) continue;
            if (output.length > 0 && arr[output[output.length - 1]][i] === 0)
                continue;
            visitied[i] = true;
            output.push(i);
            dfs(cnt + 1);
            output.pop();
            visitied[i] = false;
        }
    }
}
console.log(
    solution(4, [
        [0, 10, 15, 20],
        [5, 0, 9, 10],
        [6, 13, 0, 12],
        [8, 8, 9, 0],
    ])
);

let a = [];
if (a[1]) console.log(true);
else console.log(false);
