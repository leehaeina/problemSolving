data = input()
x = int(ord(data[0])) - int(ord('a')) +1
y = int(data[1])

steps = [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(-1,2),(1,-2),(-1,-2)]

count = 0
for step in steps :
     nx = x + step[0]
     ny = y + step[1]
     if(nx<1 or ny<1 or nx>8 or ny>8):
         continue
     else:
         count += 1

 
print(count)