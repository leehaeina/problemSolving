import collections
n,m,v = map(int,input().split())
graph = [[] for i in range(n+1)]
for i in range(m):
    temp = list(map(int,input().split()))
    graph[temp[0]].append(temp[1])
    graph[temp[1]].append(temp[0])
visited = [False for i in range(n+1)]
print(v,end=" ")
stack = []
visited[v] = True
stack.extend(sorted(graph[v],reverse=True))
while(stack):
    #print(stack)
    node = stack.pop()
    if(visited[node]!=True):
        visited[node] = True
        print(node,end=" ")
        stack.extend(sorted(graph[node],reverse=True))
print()
visited = [False for i in range(n+1)]
que = collections.deque()
visited[v] = True
print(v,end=" ")
que.extend(sorted(graph[v]))
while(que):
    node = que.popleft()
    if(visited[node]!=True):
        visited[node] = True
        print(node,end=" ")
        que.extend(sorted(graph[node]))



    

