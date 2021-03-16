def solution(s):
    answer = len(s)
    lowest = s
    count = 1
    slicing = [i for i in range(1,len(s)//2 +1) ]
    
    for sli in slicing:
        temp = s[:sli]
        temp_str=""
        for k in range(sli,len(s)+sli,sli):
            if k+sli >len(s):
                last = len(s)+1    
            else:
                last = k+sli
            if(temp == s[k:last]):
                count += 1
            else:
                if(count != 1):
                    temp_str += str(count)
                temp_str += temp
                temp = s[k:last]
                count = 1
        if(len(lowest)>len(temp_str)):
            lowest = temp_str
            
    answer = len(lowest)
    return answer