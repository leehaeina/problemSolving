n = int(input())
arr = []
for i in range(n):
    temp = list(map(int,input().split()))
    arr.append(temp)

dp = [[0]*n for i in range(n)]
dp[0][0] = 1
for i in range(n):
    for j in range(n):
        if(i == n-1 and j == n-1):
            break
        x = arr[i][j] + i
        y = arr[i][j] + j
        if(x<n):
            dp[x][j] += dp[i][j]
        if(y<n):
            dp[i][y] += dp[i][j] 

print(dp[n-1][n-1])