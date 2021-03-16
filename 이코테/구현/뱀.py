n = int(input())
k = int(input())
apple = []
for _ in range(k):
    apple.append(list(map(int,input().split())))
l = int(input())
time = []
command = []
for _ in range(l):
    temp = input().split()
    time.append(int(temp[0]))
    command.append(temp[1])
snake = [[0]*n for _ in range(n)]
count = 0
apple_count = 0
x=0
y=0
direction = 1
rotate = [[-1,0],[0,1],[1,0],[0,-1]]
tx = -1
ty = -1
while True:
    nx = x+rotate[direction][0]
    ny = y+rotate[direction][1]
    count += 1
    if(nx<0 or ny<0 or nx>=n or ny>=n):
        break
    elif (snake[nx][ny] == 1):
        break
    elif([nx,ny] in apple):
        apple.remove([nx,ny])
        if(tx == -1):
            tx = x
            ty = y
    elif(tx != 1):
        snake[tx][ty] = 0
        
        tx = x
        ty = y

    else:
        snake[x][y] = 0
    snake[nx][ny] = 1
    x = nx
    y = ny

   
    if(count in time):
        index = time.index(count)
        print("hi",count,index,command[index])
        if(command[index] == 'L') :
            direction -= 1
        else:
            direction += 1
        if(direction == -1 ):
            direction = 3
        elif (direction == 4):
            direction = 0
    print('-------------')
    print(count,direction)
    print(x,y)
    print('-------------')
print(count)