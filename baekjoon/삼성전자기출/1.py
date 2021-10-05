def wall(arr,selectNum):
    result = []
    if(selectNum == 1): 
        return list(map(lambda i : [i],arr))
    for i in range(len(arr)):
        fixed = [arr[i]]
        restArr = arr[i+1:]
        combinationArr = wall(restArr,selectNum-1)
        combine = list(map(lambda i : fixed+i,combinationArr))
        result.extend(combine)
    return result
print(wall([1,2,3,4,5],3))