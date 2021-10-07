from collections import deque
from operator import itemgetter, attrgetter
import time
n = int(input())
arr = []
shark = []
for i in range(n):
    temp = list(map(int,input().split()))
    for j in range(n):
        if(temp[j]==9):
            shark = [2,i,j]
            temp[j]=0
    arr.append(temp)
diff = [[0,1],[1,0],[-1,0],[0,-1]]
weight = 0
count = 0
def bfs(shark):
    q = deque();
    visited = [[-1] * n for _ in range(n)]
    visited[shark[1]][shark[2]] = 0
    q.append([shark[1],shark[2]])
    size = shark[0]
    distance = {}
    
    while(q) :
        x,y = q.popleft()
        ##print(x,y)
        #print(x,y,size,'----------')
        #time.sleep(0.3)
        for i in range(4):
            
            nx = x + diff[i][0]
            ny = y + diff[i][1]
            ##print("nx:",nx,"ny:",ny)
            if(nx<0 or ny <0 or nx>=n or ny>=n):
                continue
            elif(arr[nx][ny]>size or visited[nx][ny] != -1):
                continue
            elif(0<arr[nx][ny]<size): #fish\
                ##print("FISH!!",arr[nx][ny],visited[nx][ny])
                if((visited[x][y]+1) in distance):
                    distance[visited[x][y]+1].append([nx,ny])
                else:
                    distance[visited[x][y]+1] = [[nx,ny]]
                visited[nx][ny] = visited[x][y]+1
            else:
                visited[nx][ny] = visited[x][y]+1
                q.append([nx,ny])
            #print(nx,ny,distance,q)
            #print("====arr======")
            #for j in range(n):
                #print(arr[j])
            #print("====visit=========")
            #for j in range(n):
                #print(visited[j])
            #time.sleep(0.3)
        if(len(distance.items())>=2):
            break
    return distance
while(True):
    distance = bfs(shark)
    ##print(distance)
    if(len(distance.items())==0):
        break
    else:
        distance = sorted(distance.items(),key=lambda item : item[0])
        count += 1
        if(count==shark[0]):
            shark[0]+=1
            count=0
            #print("FISHUP",shark[0])
        shortes = distance[0][1]
        shortes = sorted(shortes,key=lambda x : (x[0],x[1]))
        shark = [shark[0],shortes[0][0],shortes[0][1]]
        arr[shortes[0][0]][shortes[0][1]] = 0
        ##print("weight",distance[0][0])
        weight += distance[0][0]
        #print("----",shark[1],shark[2])
        #print("!!WEIGHT!!",distance[0][0],weight)
print(weight)    

# 상어 자리 0으로 초기화 안함
# 물고기 먹으면 0으로 초기화 안함
# 물고기 먹은 count 0으로 초기화 안함
# 처음 시작자리 visited = 0으로 초기화 안함 -> 0이 거리라서 나머지는 -1로 초기화했음