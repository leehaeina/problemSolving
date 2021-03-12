n,m,k = map(int,input().split())
data = list(map(int,input().split()))

data.sort()
first = data[-1]
second = data[-2]

sumSet = first * k + second

result = (m//(k+1)) * sumSet + (m%(k+1)) *first
print(result)