from collections import deque
from operator import itemgetter, attrgetter
n = int(input())
arr = []
shark = []
for i in range(n):
    temp = list(map(int,input().split()))
    for j in range(n):
        if(temp[j]==9):
            shark = [2,i,j]
    arr.append(temp)
diff = [[0,1],[1,0],[-1,0],[0,-1]]
time = 0
count = 0
def bfs(shark):
    q = deque();
    visited = [[0] * n for _ in range(n)]
    q.append([shark[1],shark[2]])
    size = shark[0]
    distance = {}
    while(q) :
        x,y = q.popleft()
        for i in range(4):
            nx = x + diff[i][0]
            ny = y + diff[i][1]
            if(nx<0 or ny <0 or nx>=n or ny>=n):
                break
            elif(arr[nx][ny]>size or visited[nx][ny] != 0):
                break
            elif(0<arr[nx][ny]<size): #fish
                if(distance[visited[x][y]+1]):
                    distance[visited[x][y]+1].append([nx,ny])
                else:
                    distance[visited[x][y]+1] = []
                visited[nx][ny] = visited[x][y]+1
            else:
                visited[nx][ny] = visited[x][y]+1
                q.append([nx,ny])
    return distance
while(True):
    distance = bfs(shark)
    print(distance)
    distance = sorted(distance.items(),key=lambda item : item[0])
    if(len(distance)==0):
        break
    else:
        count += 1
        if(count==shark[0]):
            shark[0]+=1
        shortes = distance[0][1]
        shortes = sorted(shortes,key=lambda x : (x[0],x[1]))
        shark = [shark[0],shortes[0][0],shortes[0][1]]
        time += distance[0][1]
print(time)    

                
                
        
    