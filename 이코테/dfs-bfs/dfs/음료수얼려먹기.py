n,m = map(int,input().split())
graph = []
result = 0
for _ in range(n):
    graph.append(map(int,input()))

def dfs(x,y):
    if(x>n or y>m or x<0 or y<0):
        return False
    if(graph[x][y] == 1):
        return False
    else:
        graph[x][y] = 1
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y+1)
        dfs(x,y-1)
        return True


for i in range(n):
    for j in range(m):
        if(dfs(n,m) == True):
            result += 1
print(result)

