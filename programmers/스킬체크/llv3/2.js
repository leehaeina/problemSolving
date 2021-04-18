function solution(n, t, m, timetable) {
    var answer = '';
    let start = 0900
    timetable = timetable.reduce((acc,cur)=>{
        let temp = cur.slice(0,2) + cur.slice(3,)
        acc.push(Number(temp))
        return acc
    },[])
    timetable.sort()
    let value = Array.from(Array(n), () => new Array(m).fill(-1))
    console.log(value[0].length)
    let order = 0;
    let bus = 0;
    let time = 0;
    for(let i =0;i<t;i++)
    {
        console.log(value,i,start,timetable[order])
        let index = value[bus].indexOf(-1)
        //in time and in bus 
        if((timetable[order]<=start+(t*i)*100) && (index !=-1) ){
            value[bus][index] = timetable[order]
            order ++;
        }
        //in time not in bus
        else if(index === -1 )
        {
            if(bus+1===n)  {console.log("break",value,i,start,timetable[order]);break}
            else bus++;
            
        }
        else if(order>= timetable.length)
        {
            break
        }
        i--;
        //not in time in bus
        //continue;
    }
   console.log(value);
   for(let i = n-1;i>=0;i--)
   {
       let index = value[i].indexOf(-1)
       if(index === -1){
           answer = value[i][m-1] -1

       }
       else 
       answer = start + t*i
   }
    return answer;
}
console.log(solution(2,	1,	2,	["09:00", "09:00", "09:00", "09:00"]))