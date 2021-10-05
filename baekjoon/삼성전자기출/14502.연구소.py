import copy
# import sys
# sys.setrecursionlimit(10**6)
n,m = map(int,input().split())
array = []
for _ in range(n):
    array.append(list(map(int,input().split())))
diff = [[0,1],[0,-1],[1,0],[-1,0]]
def wall(arr,selectNum):
    result = []
    if(selectNum == 1): 
        return list(map(lambda i : [i],arr))
    for i in range(len(arr)):
        fixed = [arr[i]]
        restArr = arr[i+1:]
        combinationArr = wall(restArr,selectNum-1)
        combine = list(map(lambda i : fixed+i,combinationArr))
        result.extend(combine)
    return result
def calcXY(nums):
    returned = []
    for i in range(len(nums)):
        x = nums[i]//m
        y = nums[i] % m
        if(array[x][y]!=0):
            return None
        else :
            returned.append([x,y])
    return returned
def virus() :
    count = 0

    for x in range(n):
        for y in range(m):
            if(copyArr[x][y]==2):
                dfs(x,y)
    for x in range(n):
        for y in range(m):
            if(copyArr[x][y] ==0):
                count+=1 
    return count
def dfs(x,y):
    copyArr[x][y] = 2 # 바이러스로 변경

    # 상하좌우 탐색
    for i in range(4):
        nx, ny = x + diff[i][0], y + diff[i][1]
        if 0 <= nx < n and 0 <= ny < m:
            if copyArr[nx][ny] == 0: # 바이러스가 퍼질 수 있는 곳
                dfs(nx,ny) # 바이러스 퍼뜨리기
answer = []
wallArr = wall([x for x in range(n*m)],3)
for i in range(len(wallArr)):
    global copyArr 
    copyArr= copy.deepcopy(array)
    wall = calcXY(wallArr[i])
    if(wall): 
        for j in range(len(wall)):
            copyArr[wall[j][0]][wall[j][1]] = 1
    answer.append(virus())
print(max(answer))