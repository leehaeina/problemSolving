data = input()
first_sum = 0
second_sum = 0
length = len(data)//2

for i in data[:length]:
    first_sum += int(i)
    

for j in data[length:]:
    second_sum += int(j)
  
if(first_sum == second_sum) :
    print("LUCKY")
else:
    print("READY")