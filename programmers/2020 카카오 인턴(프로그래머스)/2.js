//해커톤
function solution(expression) {
    var answer = 0;
    let combination = [
        ['+','-','*'],
        ['+','*','-'],
        ['*','-','+'],
        ['*','+','-'],
        ['-','+','*'],
        ['-','*','+'],
    ]
    let number = []
    let sign = []
    expression = expression.split('')
    let last = 0
    expression.reduce((acc,cur,index)=>{
        if(combination[0].includes(cur)){
            number.push(acc)
            sign.push(cur)
            last = index
            return ''
        }
        else{
            
            return acc+cur
        }
    },'')
    console.log(number,sign,expression[last])
    number.push(expression.splice(last+1).join(''))
    
    for(let combi of combination){
        let signCopy = sign.slice()
        let numberCopy = number.slice()
        let oneCombiResult = 0
        console.log(combi)
        for(let oneSign of combi){
            
            for(let i = 0; i<signCopy.length;i++)
            {    console.log("before",numberCopy,signCopy,oneCombiResult,i,signCopy.length)
                if(signCopy[i] === oneSign){
                    oneCombiResult = eval(numberCopy[i]+oneSign+numberCopy[i+1])
                    numberCopy.splice(i,2,String(oneCombiResult))
                    signCopy.splice(i,1)
                }
                console.log("after",numberCopy,signCopy,oneCombiResult,i,signCopy.length)
            }
            
        }
        if(signCopy.length) oneCombiResult = eval(numberCopy[0]+signCopy[0]+numberCopy[1])
        if(answer<Math.abs(oneCombiResult)) answer = Math.abs(oneCombiResult)
    }








    // for (let temp of combi){ //기호 조합
    //     let numberCopy = number.slice()
    //     let signCopy = sign.slice()
    //     let dp = temp.reduce((acc,cur)=>{//하나씩 빼는거 여기의 결과가 최종값
    //         let haein = signCopy.reduce((a,c,index)=>{//부호 순서대로 계산하기 
    //             console.log(cur,c,numberCopy,signCopy)
    //             if(c === cur){//맞는게 있으면 그거 빼고 계산 하고 반복 
    //                 a = eval(numberCopy[index]+c +numberCopy[index+1])
    //                 console.log("a",index,numberCopy[index],c ,numberCopy[index+1])
    //                 numberCopy.splice(index,2,String(a))
    //                 signCopy.splice(index,1)
                   
                    
    //             }
    //             return a
            
    //         },'') // 부호 하나 계산 끝 
    //         return haein
    //        console.log("AAA",haein)
    //     },'')// 총 계산값 리턴 
    //     console.log("RRR",temp,dp)
    //     answer <Math.abs() ? answer = Math.abs() : answer
        
    // }
   
    
    return answer;
}
console.log(solution("100-200*300-500+20"))