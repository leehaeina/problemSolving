//키패드 문제 35분 


function solution(numbers, hand) {
    var answer = '';
    let key = Array(10).fill(0)
    key[2] = [3,1,0,1,2,1,2,3,2,3,4,4]
    key[5] = [2,2,1,2,1,0,1,2,1,2,3,3]
    key[8] = [1,3,2,3,2,1,2,1,0,1,2,2]
    key[0] = [0,4,3,4,3,2,3,2,1,2,1,1]
    console.log(key)
    let left = 10
    let right = 11
    answer = numbers.reduce((acc,cur)=>{
        console.log(acc,cur)
        if([1,4,7].includes(cur)) {
            left = cur
            return acc+'L'
        }
        else if([3,6,9].includes(cur)){
            right = cur
            return acc+'R'
        }
        else{
            if(key[cur][left]>key[cur][right])
                {
                    right = cur
                    return acc+'R' 
                }
            else if(key[cur][left] === key[cur][right]){
                console.log("same")
                if(hand === "right"){
                    console.log(hand)
                    right = cur
                    return acc +'R'
                }
                else{
                    left = cur
                    return acc +'L'
                }
            }
            else{
                left =cur
                return acc+'L'
            }
        }
        
    },'')
    return answer;
}
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))