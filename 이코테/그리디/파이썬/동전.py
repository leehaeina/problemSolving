n = 1260
count = 0 
coin_types = [500,100,50,10]
for coin in coin_types:
    if n>0 :
        count += n//coin
        n = (n%coin)

print(count)