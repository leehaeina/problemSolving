def solution(record):
    answer = []
    chat = {}
    for i in record:
        arr = i.split()
        print(arr)
        if((arr[0]!="Leave")):
            chat[arr[1]] = arr[2]
    for j in record:
        arr = j.split()
        temp  = ""
        if(arr[0]=="Enter"):
            temp =chat[arr[1]]+"님이 들어왔습니다."
        elif(arr[0]=="Leave"):
            temp = chat[arr[1]] + "님이 나갔습니다."
        else : 
            continue
        answer.append(temp)
    return answer
print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))