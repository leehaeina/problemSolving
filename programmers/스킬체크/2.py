def solution(n):
    answer = []
    count = 1
    array = [[0]*(n) for i in range(n)]
    x,y=-1,0
    i=n
    while(i):
      
        for a in range(i):
           
            array[x+1][y] = count
            count += 1
            x= x+1
        if(i>1) :
            i -= 1
        else:
            break
        for b in range(i):
          
            array[x][y+1] = count
            count += 1
            y = y+1
        if(i>1) :
            i -= 1
        else:
            break    
        for c in range(i):
            
            array[x-1][y-1] = count 
            x -=1
            y -= 1
            count += 1
        if(i>1) :
            i -= 1
        else:
            break
    print(array)
    for h in range(n):
        for k in range(n):
            if(array[h][k] != 0) :
                answer.append(array[h][k])
    
    return answer
print(solution(5))