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

number = [x for x in range(12)]
print(number)
number.sort(reverse=True)
print(number)
dic = {}
dic['a'] = 10
dic['b'] = 11
dic['c'] = 1
print(dic)
for k , v in dic.items():
    print(v)
arr = [['a',1,10],['b',4,12],['b',4,15],['a',3,1],['c',4,1]]
arr = sorted(arr,key=lambda x: (x[0],x[1],-x[2]))
print(arr)
print(dic)
print(len(arr), number.count(7)) 
for i in range(len(number)):
    number[i] = str(number[i])
for i in range(0,10,2):
    print(i)
    i += 1

result = "".join(number)
print(result)
arr2 = [[]*10 for i in range(10)]
print(arr2)
str2="hellohaein"

arr3 = list(str2)
print(arr3)