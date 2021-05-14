function solution(s) {
    var answer = 0;
    let length = s.length;
    let str = s+s;
    if(s.length %2 !==0) return 0
    for(let i = 0; i<s.length;i++)
        {
            if(isRight(str.substr(i,length)))
                answer++;
        }
    //괄호 올바른지 확인! 
    function isRight(str){
        const left = ['(','{','['];
        const right = [')','}',']'];
        const obj = {
            '(':')','{':'}','[':']'
        }
        const leftStack = [];
        const rightStack = [];
        let arr = str.split('');
        for(let i = 0; i<str.length;i++){
           if(left.includes(str[i])) leftStack.push(str[i]);
            else{
               let temp = leftStack.pop();
                if(obj[temp] !== str[i]) return false;
            }
        }
        
        return true;
        
    }
    return answer;
}