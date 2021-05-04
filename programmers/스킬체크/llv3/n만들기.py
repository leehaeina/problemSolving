def solution(n, money):
    answer = 0
    dp = [ 0 for i in range(n+1)]
    for i in range(n+1):
        if(i % money[0] == 0):
            dp[i] = 1

    for one in money[1:]:
        for j in range(one,n+1):  
            dp[j] += dp[j-one]
        
   

    return dp[-1]
print(solution(5,	[1,2,5],	))