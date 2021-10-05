n,l = map(int,input().split())
roads = []
for _ in range(n):
    roads.append(list(map(int,input().split())))
row = [[0] * n for i in range(n)]
col = [[0] * n for i in range(n)]
count = 0
def calc(a,b):
    if(a>b) :
        return a-b
    else :
        return b-a
#row
for i in range(n):
    print()
    print(i,"번시작")
    now = roads[i][0]
    check = True
    for j in range(1,n):
        if roads[i][j] == now : # now랑 같으면 ㄱㅊ
            continue
        elif(calc(now,roads[i][j])==1): #now랑 다르지만 1차이나면 경사로 설치 할 수 있는지 확인
            direction = now-roads[i][j] # direction : 더 큰걸 만나면 -1 더 작은걸 만나면 +1
            # 더 큰 걸 만났을 땐 j-k 더작은걸 만났을 땐, j+0부터 시작임
            print("1만큼 차이남",roads[i],j,now)
            climb = True 
            if direction == -1:
                now = roads[i][j]
                print("더 큰 걸 만났을 때")
                for k in range(1,l+1): # l만큼 동안 설치 가능한지확인, 
                    #print("k : ",k," j-k : ",j-k," roads : ",roads[i][j-k]," now : ",now,"visited",row[i])
                    if not(j-k>=0 and row[i][j-k] == 0 and calc(roads[i][j-k],now)==1  ):
                        climb = False
                        break
                    else : 
                        row[i][j-k] = 1
                
            else :
                print("더 작은 걸 만났을 때")
                for k in range(l):
                    #print("k : ",k," j+k : ",j+k," roads : ",roads[i][j+k]," now : ",now,"visited",row[i])
                    if not( j+k<n and row[i][j+k]==0 and calc(roads[i][j+k],now)==1 ):
                        climb = False
                        break
                    else :
                        row[i][j+k] = 1
                    
            print("climb",climb,row[i])
            now = roads[i][j]
            if not climb : # 설치 불가능 하면 못가는 길
                check = False
                break
        else : # 나우랑도 다르고 1이상 차이나면 못가는 길
            check = False
            break
    if(check) :
        count += 1
        print("CHECKTRUE",i)

print(count)