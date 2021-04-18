from collections import deque
def isCheck (node,connect):
    print(graph[connect],node,connect)
    temp = graph[connect][:]
    temp.remove(node)
    complement = list(set(temp) - set(check))
    print(graph[connect],temp)
    if(len(complement)==0):
         return True
    else :
        return False
def bfs(start,a):
    q = deque([start])
    if(a[start] == 0):
        for i in range(1,len(a)):
            if(a[i] !=0):
                start = i
                break;  
    while (q):
        node = q.popleft()
        print(node)
        if(len(check)==len(a)) :
            break
        for i in graph[node]:
            print(i)
            if(i in check):
                continue
            elif(isCheck(node,i)):
                check.append(i)
                print("ischeck")
                continue
            else:
                if(a[node]>a[i]):
                    a[node] -= 1
                    a[i] += 1
                else:
                    a[node] += 1
                    a[i] -= 1
                print("hello")
            if(a[node] != 0) :
                q.append(node)
            elif(isCheck(i,node)):
                check.append(node)
                q.append(i)
        print(a)
    return a 
def solution(a, edges):
    answer = -2
    global check 
    check =[]
    global graph 
    graph= [[]*len(a) for i in range(len(a))]
    for i in edges:
        graph[i[0]].append(i[1])
        graph[i[1]].append(i[0])
    print(graph)
    print(bfs(0,a))
    return answer
print(solution([-5,0,2,1,2],	[[0,1],[3,4],[2,3],[0,3]]))

# def bfs(graph,start,visited):
    
#     visited[start] = True
#     while (q):
#         node = q.popleft()
#         print(node)
#         for i in graph[node]:
#             if( not visited[i]):
#                 q.append(i)
#                 visited[i] = True
# graph = [
#     [],
#     [2,3,4],
#     [1,7],
#     [1,4,5],
#     [3,5],
#     [3,4],
#     [7],
#     [2,6,8],
#     [1,7]
# ]
# visited = [False]* 9
# bfs(graph,1,visited)