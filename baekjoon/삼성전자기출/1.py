from operator import itemgetter, attrgetter
arr={
    2:[[1,0],[1,1],[2,1]],
    3:[[3,0],[0,1]]
}

x = sorted(arr.items(),key=lambda item : (item[0],item[1]))
print(x)