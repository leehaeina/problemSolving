data = input()
number_sum = 0
arr_char = []
for i in data:
    if(ord(i)< ord('A')) :
        print(ord(i),ord('A'))
        number_sum +=int(i)
    else:
        arr_char.append(i)
arr_char.sort()
result = ''.join(arr_char)
result += str(number_sum)

print(result)