data = list(map(int,input()))
result = data[0]
for item in data[1:]:
   
    if(result*item == 0 or result*item ==1):
        print(result*item)
        result += item
   
    else:
        result =result* item
        
print(result)
    