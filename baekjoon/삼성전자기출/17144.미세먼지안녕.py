r,c,t = map(int,input().split())
room = []
airs = 0
for i in range(r):
    row = list(map(int,input().split()))
    if(row[0]==-1 and airs ==0) : airs = i 
    room.append(row)
diff = [[0,1],[1,0],[0,-1],[-1,0]]
def air(newRoom):
    for i in range(r):
        for j in range(c):
            if(i==airs or i == airs+1):
                if(j == 1):
                    room[i][j] = 0
                elif(j==0):
                    room[i][j] = -1
                else:
                    room[i][j] = newRoom[i][j-1]
            elif(i==0 or i ==r-1):
                if(j == c-1 and i ==0):
                    room[i][j] = newRoom[i+1][j]
                elif (j == c-1 and i ==r-1):
                    room[i][j] = newRoom[i-1][j]
                else:
                    room[i][j] = newRoom[i][j+1]
            elif(j==c-1):
                if(i<airs):
                    room[i][j] = newRoom[i+1][j]
                elif(i>airs+1):
                    room[i][j] = newRoom[i-1][j]
            elif(j==0):
                if(i<airs):
                    room[i][j] = newRoom[i-1][j]
                elif(i>airs+1):
                    room[i][j] = newRoom[i+1][j]
            else : room[i][j] = newRoom[i][j]
def dust():
    newRoom = [[0] * c for _ in range(r)]
    for i in range(r):
        for j in range(c):
            if not(room[i][j]==-1 or room[i][j]==0):
                #print(room[i][j]," dusty")
                rest = room[i][j]
                for d in range(4):
                    nx = i + diff[d][0]
                    ny = j + diff[d][1]
                    divided = room[i][j] // 5 
                    #print("divied",divided)
                    if(nx<0 or ny<0 or nx>=r or ny>=c):
                        continue
                    elif(room[nx][ny] == -1):
                        continue
                    else:
                        newRoom[nx][ny] += divided
                        rest -= divided
                newRoom[i][j] += rest
                #for x in range(r):
                    #print(newRoom[x])
            if(room[i][j]==-1):
                newRoom[i][j] = -1
    air(newRoom)
for i in range(t):
    dust()
answer = 0
#print() 

for i in range(r):
    for j in range(c):
        if not(room[i][j] == -1):
            answer += room[i][j]
print(answer)

# 1시간 반 걸림.. ㅜㅜ
# 35line 에서 + - 반대라서 틀린건데 모르겠어서 다 탐색하느라 망함.. ㅜㅜ
# 이것도 파이썬은 오류나고 파이파이는 됨
