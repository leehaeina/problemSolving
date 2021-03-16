n,m = map(int,input().split())
x,y,direction = map(int,input().split())
array = [[0]*m for _ in range(n)]
data = []
for _ in range(n):
    data.append(list(map(int,input().split())))

count = 0
result = 0
rotate = [[-1,0],[0,1],[1,0],[0,-1]]

while True:
    direction -= 1
    count += 1
    if(direction == -1):
        direction = 3
    nx = x + rotate[direction][0]
    ny = y + rotate[direction][1]

    if(data[nx][ny] == 0 and array[nx][ny] == 0):
        x = nx
        y = ny
        array[nx][ny] = 1
        result += 1
        count = 0
        continue
    
    if(count == 4):
        nx = x - rotate[direction][0]
        ny = y - rotate[direction][1]
        if(data[nx][ny] == 0):
            x = nx
            y = ny
        else:
            break
        count = 0
print(result)
    