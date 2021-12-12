function solution(lottos, win_nums) {
    var answer = [];
    let zeros = 0;
    let getRight = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeros++;
        } else {
            for (let j = 0; j < win_nums.length; j++) {
                if (win_nums[j] === lottos[i]) {
                    getRight++;
                    win_nums.splice(j, 1);
                    break;
                }
            }
        }
    }

    answer = zeros + getRight;
    if (zeros + getRight <= 1) answer = 1;
    if (getRight <= 1) getRight = 1;
    //console.log(answer,getRight)
    return [7 - answer, 7 - getRight];
}
