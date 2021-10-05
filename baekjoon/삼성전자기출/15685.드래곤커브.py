n = int(input())
curves = []
for _ in range(n):
    y,x,d,g = map(int,input().split())
    curves.append([x,y,d,g])
diff = [[0,1],[-1,0],[0,-1],[1,0]]
change = [[-1,0],[0,-1],[1,0],[0,1]]
arr = [[0]* 101 for _ in range(101)]
for i in range(n):
    #0th
    info = []
    x,y,d,g = curves.pop()
    arr[x][y] = 1
    nx = x + diff[d][0]
    ny = y + diff[d][1]
    # nx,ny out of range check
    if not(ny<0 or nx<0 or ny>=101 or nx>=101):
        arr[nx][ny] = 1
    fx = nx
    fy = ny
    info.append(d)

    #1th
    for j in range(1,g+1):
        for k in range(len(info)-1,-1,-1):
            d = info[k]
            nx = fx + change[d][0]
            ny = fy + change[d][1]
            if(ny<0 or nx<0 or ny>=101 or nx>=101):
                break
            arr[nx][ny] = 1
            fx = nx
            fy = ny
            if(d+1<4):
                info.append(d+1)
            else:
                info.append(0)

count = 0
for i in range(100):
    for j in range(100):
        if(arr[i][j]==1 and arr[i+1][j]==1 and arr[i][j+1] == 1 and arr[i+1][j+1]==1):
            count+=1 
print(count)
        
