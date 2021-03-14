n = int(input())
data = input().split()
print(data)
direction = ['L','R','U','D']

x = 0
y = 0
dx = [-1,1,0,0]
dy = [0,0,-1,1]

for plan in data:
    for i in range(len(direction)):
        if(direction[i] == plan):
            nx = x + dx[i]
            ny = y + dy[i]
    if (nx<0 or nx>n-1 or ny <0 or ny>n-1):
        continue
    x = nx
    y = ny

print(x,y)