#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main()
{
    int T;
    scanf("%d", &T);
    while (T--) {
        int x;
        scanf("%d", &x);
        int* count = new int[x + 1];
        count[1] = 1;
        count[2] = 2;
        count[3] = 4;
        for (int i = 4; i <= x; i++)
        {
            count[i] = count[i - 1] + count[i - 2] + count[i - 3];
        }
            printf("%d\n", count[x]);
    }
    return 0;
}