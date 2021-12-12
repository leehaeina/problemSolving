#  ArrayList<ArrayList<Integer>> array = new ArrayList<ArrayList<Integer>>();
#         for(int j = 0; j<B.length;j++){
#             String[] sb = B[j].split("");
#             ArrayList<Integer> arrayList = new ArrayList<>();
#             for(int i =0; i<sb.length;i++){
#                 System.out.println(sb[i]);
#                 if(sb[i].equals("#")){
#                     arrayList.add(1);

#                 }
#                 else if(sb[i].equals(".")){
#                     arrayList.add(0);
#                 }
#             }
#             array.add(arrayList);

#         }
#B = ['.##.#', '#.#..', '#...#', '#.##.'];
#B = ['.#..#', '##..#', '...#.']
B = ['##.', '#.#', '.##']
arr = []
for i in range (len(B)):
    temp = []
    for j in range(len(B[i])):
        if(B[i][j]=="#"):
            temp.append(1)
        else:
            temp.append(0)
    arr.append(temp)
diff = [[0,1],[1,0],[-1,0],[0,-1]]

n = len(B)
m = len(B[0])
visited = [[0] * m for i in range(n)]
def dfs(x,y,count):
    if(x<0 or y<0 or x>=n or y>=m):
        return count
    visited[x][y] = 1
    for i in range(4):
        nx = x + diff[i][0]
        ny = y + diff[i][1]
        if(nx<0 or ny<0 or nx>=n or ny>=m):
            continue
        elif (arr[nx][ny]==0 or visited[nx][ny] == 1):
            continue
        else :
            arr[nx][ny] = count+1
            #visited[nx][ny] = 1
            returned = dfs(nx,ny,count+1)
            if(returned==count):
                count+=1
                continue
            return returned
            

    return count        

answer = {}
for i in range(len(arr)):
    for j in range(len(arr[0])):
        if(arr[i][j] == 1 and visited[i][j] != 1):
            print(i,j,dfs(i,j,1));
            

for a in range(n):
    print(arr[a])


print(answer)
        
        
    