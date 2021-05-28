function solution(numbers, target) {
    var answer = 0;
    DFS(0, 0);
    function DFS(count, sum) {
        if (count === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        } else {
            DFS(count + 1, sum + numbers[count]);
            DFS(count + 1, sum - numbers[count]);
        }
    }
    return answer;
}
