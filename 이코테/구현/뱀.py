n = int(input())
k = int(input())
apple = []
for _ in range(k):
    apple_temp = list(map(int,input().split()))
    apple.append([apple_temp[0]-1,apple_temp[1]-1])
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
    if(nx<0 or ny<0 or nx>=n or ny>=n): #벽이랑 부딪힘
        break
    elif (snake[nx][ny] == 1): # 뱀이랑 부딪힘
        break
    elif([nx,ny] in apple): # 종료 안할때, 사과를 냠
        apple.remove([nx,ny])
        if(tx == -1): # 사과 처음 먹을때 테일 설정 사과 계속 먹는 중이면 테일 그대로라서 다시 안함 
            tx = x
            ty = y
    elif(tx != 1): # 사과 없는데 꼬리 있을때
        snake[tx][ty] = 0 # 꼬리를 자르기!
        
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