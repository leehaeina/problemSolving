data = list(map(int,input()))
count = 0
temp = data[0]
for i in data[1:]:
    if(temp != i):
        count+=1
        temp = i

if(count%2 == 0):
    print(int(count/2))
else:
    print(int(count//2 +1))

    