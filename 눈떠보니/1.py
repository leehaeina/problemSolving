# -*- coding: utf8 -*-
test = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ']
l=[]
for i in test:
    l.append(chr(int(i.strip().replace(' ','').replace('+','1').replace('-','0'),2)))
#ord() : 문자 -> 숫자
#chr() : 숫자 -> 문자
print(''.join(l))

#or
#list comprehension

print([(i,j,i*j)  for i in range(2,10) for j in range(1,10)])