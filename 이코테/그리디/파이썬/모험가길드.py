n = int(input())
data = list(map(int,input().split()))
data.sort(reverse = True)
count = 0
i = 0
while True:
    first = data[i]
    i = i + first
    count += 1
    if (i >= n):
        break
print(count)
