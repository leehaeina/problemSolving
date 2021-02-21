#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main()
{
    int x;
    scanf("%d", &x);
    int* count = new int[x+1];
    count[1] = 1;
    count[2] = 2;
    for (int i = 3; i <= x; i++)
    {
        count[i] = (count[i - 1] + count[i - 2])%10007;
 
    }
    
    printf("%d", count[x]);
    return 0;
}