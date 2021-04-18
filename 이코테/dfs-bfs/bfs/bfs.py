from collections import deque
def bfs(graph,start,visited):
    q = deque([start])
    visited[start] = True
    while (q):
        node = q.popleft()
        print(node)
        for i in graph[node]:
            if( not visited[i]):
                q.append(i)
                visited[i] = True
graph = [
    [],
    [2,3,4],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]
visited = [False]* 9
bfs(graph,1,visited)