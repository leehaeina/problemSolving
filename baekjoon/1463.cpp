#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main()
{
    int x;
    scanf("%d", &x);
    int* count = new int[x+1];
    count[1] = 0;
    for (int i = 2; i <= x; i++)
    {
        count[i] = count[i - 1] + 1;
        if (i % 2 == 0) count[i] = min(count[i], count[i / 2] + 1);
        if (i % 3 == 0)count[i]=min(count[i], count[i / 3] + 1);
    }
    
    printf("%d", count[x]);
    return 0;
}