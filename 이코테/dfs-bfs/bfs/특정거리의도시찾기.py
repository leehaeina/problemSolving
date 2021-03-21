from collections import deque

# n,m,k,x = map(int,input().split())
# graph = [[] for _ in range(n+1)]

# for _ in range(m):
#     a,b = map(int,input().split())
#     graph[a].append(b)
# distance = [-1] * (n+1)
# distance[x] = 0
# q = deque([x])
# print(  q,distance)
# while q:
#     now = q.popleft()
#     for next_node in graph[now]: #인접노드 빼기 
#         if(distance[next_node]==-1 ): # 인접노드 방문 안했으면 
#             distance[next_node] = distance[now] + 1 # 인접노드이니까 현재노드까지 거리 (==distance[now]) +1 넣기!! 
#             q.append(next_node) # 인접노드 큐에 쌓기


# check = False
# for i in range(1,n+1):
#     if distance[i] == k:
#         print(i)
          
#         check = True

# if check == False:
#     print(-1)



n,m,k,x = map(int,input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a,b = map(int,input().split())
    graph[a].append(b)
distance = [-1] * (n+1)
distance[x] =0

q = deque()
q.append(x)

while q:
    now = q.popleft()
    for node in graph[now]:
        if(distance[node] == -1):
            q.append(node)
            distance[node] = distance[now] + 1

check = False
for i in range(len(distance)):
    if(distance[i] == k):
        print(i)
        check = True
if(check == False):
    print(-1) 