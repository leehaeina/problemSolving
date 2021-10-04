from collections import deque
n = int(input())
apple = int(input())
apples = []
array = [[0]*n for _ in range(n)]
for i in range(apple):
    x,y = map(int,input().split())
    array[x-1][y-1] = 1
rotateNum = int(input())
rotate = []
for _ in range(rotateNum):
    rotate.append(list(input().split()))
count = 0
array[0][0] = 2
rotate.reverse()
nextRotate = rotate.pop()
x = 0
y = 0
diff = [[0,1],[-1,0],[0,-1],[1,0]]
direction = 0
snake = deque()
snake.append([0,0])
while(True):
    count += 1
    for i in range(n):
        nx = x + diff[direction][0]
        ny = y + diff[direction][1]
    if(nx<0 or ny <0 or nx>=n or ny>= n):
        break
    elif(array[nx][ny] == 2 ):
        break
    elif(array[nx][ny] == 1):
        array[nx][ny] = 2
    else :
        tail = snake.pop()
        ty = tail[1]
        tx = tail[0]
        array[tx][ty] = 0
        array[nx][ny] = 2
    snake.appendleft([nx,ny])
    x = nx
    y = ny
    if(nextRotate and int(nextRotate[0]) == count):
        if(nextRotate[1] == 'L'):
            direction += 1
            if(direction>3): 
                direction = 0
        else :
            direction -= 1
            if(direction<0):
                direction = 3
        if(len(rotate)) :
            nextRotate = rotate.pop()
        else :
            nextRotate = False
print(count)        
    


