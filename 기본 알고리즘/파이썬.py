from collections import defaultdict
from collections import deque
from queue import PriorityQueue
from itertools import permutations

permu = permutations([1,2,3,4], 2)
print(list(map(list,permu)))

one = {}
defualtone = defaultdict(int)
defualtlist = defaultdict(list)
defaultdict = defaultdict(dict)

ex = 'hellohaeinnicetomeetyou'
print(list(ex))
for i in ex:
    defualtone[i]+=1
sortedItems = sorted(defualtone.items())
print(defualtone)
print(sortedItems)
print(defaultdict[1])
print(defualtlist[1])
array = [[1,i]  for i in range(10)]
array = sorted(array,key=lambda x : x[1],reverse=True)
print(array)
#array[1] = 1
print(array)
filtered = list(filter(lambda x: x[1]<5,array))
print(filtered)
a = [1,2,3]
print("".join(map(str,a)))
print(list(map(lambda x: x+1 ,list(filter(lambda y:y>1,a)))))
