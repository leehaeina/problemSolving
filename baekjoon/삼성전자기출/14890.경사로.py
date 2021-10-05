n,l = map(int,input().split())
roads = []
for _ in range(n):
    roads.append(list(map(int,input().split())))


def calc(a,b):
    if(a>b) :
        return a-b
    else :
        return b-a
#row
def solution():
    count = 0
    row = [[0] * n for i in range(n)]
    for i in range(n):
    
        now = roads[i][0]
        check = True
        for j in range(1,n):
            if roads[i][j] == now : # now랑 같으면 ㄱㅊ
                continue
            elif(calc(now,roads[i][j])==1): #now랑 다르지만 1차이나면 경사로 설치 할 수 있는지 확인
                direction = now-roads[i][j] # direction : 더 큰걸 만나면 -1 더 작은걸 만나면 +1
            # 더 큰 걸 만났을 땐 j-k 더작은걸 만났을 땐, j+0부터 시작임
                
                climb = True 
                if direction == -1:
                    now = roads[i][j]
                    
                    for k in range(1,l+1): # l만큼 동안 설치 가능한지확인, 
                    #print("k : ",k," j-k : ",j-k," roads : ",roads[i][j-k]," now : ",now,"visited",row[i])
                        if not(j-k>=0 and row[i][j-k] == 0 and calc(roads[i][j-k],now)==1  ):
                            climb = False
                            break
                        else : 
                            row[i][j-k] = 1
                
                else :
                    
                    for k in range(l):
                    #print("k : ",k," j+k : ",j+k," roads : ",roads[i][j+k]," now : ",now,"visited",row[i])
                        if not( j+k<n and row[i][j+k]==0 and calc(roads[i][j+k],now)==1 ):
                            climb = False
                            break
                        else :
                            row[i][j+k] = 1
                    
                
                now = roads[i][j]
                if not climb : # 설치 불가능 하면 못가는 길
                    check = False
                    break
            else : # 나우랑도 다르고 1이상 차이나면 못가는 길
                check = False
                break
        if(check) :
            count += 1
            
    return count

answer = 0
answer += solution()
roads = list(map(list,zip(*roads)))
answer += solution()
print(answer)

# 파이썬은 배열 인덱스 마이너스가 가능함..!
# if not 쓸수있구,
# index out of range 방지하기 위해 if(i<0 and graph[i])쓰면 됨
# roads = list(map(list,zip(*roads))) <- 이걸로 배열 행열 뒤바꾸기 가능!~
# 1시간 반정도 걸림 (? now가 큰걸만날때, 작은걸만날때 now갱신의 차이를 두지않았음!)