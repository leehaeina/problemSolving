import time
n,m = map(int,input().split())
rx,ry,rd = map(int,input().split())
home = []
for i in range(n):
    home.append(list(map(int,input().split())))
diff = [[-1,0],[0,1],[1,0],[0,-1]]
count = 0

def clean():
    global rx, ry, rd, count
    if(home[rx][ry] == 0):
        count += 1
        home[rx][ry] = 2
    #time.sleep(1)
    for i in range(1,5):
        nx = rx + diff[rd-i][0]
        ny = ry + diff[rd-i][1]
        
        if(nx<0 or ny<0 or nx >=n or ny>=m):
            continue
        print("for",nx,ny,home[nx][ny],i)
        #time.sleep(1)
        if home[nx][ny] == 0:
            home[nx][ny] = 2
            if(rd - i <0):rd = 4 + (rd-i)
            else : rd -= i
            print("rotate",rd)
            rx = rx + diff[rd][0]
            ry = ry + diff[rd][1]
            count += 1
            return True
    nx = rx + diff[rd-2][0]
    ny = ry + diff[rd-2][1]
    if(nx<0 or ny<0 or nx>=n or ny>=m or home[nx][ny]==1):
        return False
    else :
        rx = rx + diff[rd-2][0]
        ry = ry + diff[rd-2][1]
        return True

while(True):
    if (clean()) : continue
    else : break
print(count)