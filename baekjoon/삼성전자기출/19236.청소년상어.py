diff = [[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]]
count = 0
arr = []
shark = []
fish = []
for i in range(4):
    temp = list(map(int,input().split()))
    row = []
    for j in range(0,8,2):
        row.append([temp[j],temp[j+1]])
    arr.append(row)
    if(i == 0):
        shark = [0,0,arr[0][0][1]]
        count += arr[0][0][0]
        arr[0][0] = [0,0]
for i in range(4):
    for j in range(4):
        if(arr[i][j][0] != 0):
            fish.append([arr[i][j][0],i,j,arr[i][j][1]])
fish = sorted(fish,reverse=False)
print(fish)
def dfs(x,y,total):
    # 더이상 갈 데 없음
    # 벽일때
    if(x<0 or y<0 or x>=4 or y>=4):
        return
    # 상어가 갈 길이 벽일때
    sx = x + diff[shark[2]][0]
    sy = y + diff[shark[2]][1]
    if(sx<0 or sy<0 or sx>=4 or sy>=4):
        return

    # fish rotate
    for i in range(len(fish)):
        size,fx,fy,fr = fish.pop()
        direction = fr
        for j in range(8):
            if(j+fr>=8):
                direction = 8 - (fr+j)
            nx = fx + diff[direction][0]
            ny = fy + diff[direction][1]
            if(nx<0 or ny<0 or nx>=4 or ny>=4):
                continue
            if(arr[nx][ny][0] == 0 ):
                continue
            else :
                arr[nx][ny],arr[x][y] = arr[x][y], arr[nx][ny]
                break
    for i in range(4):
        print(arr[i])
    return

dfs(0,0,0)
