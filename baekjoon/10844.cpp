#include <iostream>
#include <string>
#include <algorithm>
#include <math.h>
using namespace std;
int main()
{
    int N;
    //int count[10] = { 1 }, count_next[10] = { 1 };
    int sum = 0;
    scanf("%d", &N);
    int count[10] = { 1 };

    N--;
    int count_next[10] = { 1 };
    for (int i = 0; i < 10; i++)
    {
        // sum += count_next[i];
        count[i] = 1;
        count_next[i] = 1;
    }
    count[0] = 0;
    count_next[0] = 0;
   
    for (int j = 0; j < N; j++) {
        for (int i = 0; i < 10; i++)
        {
            if (i == 0)
                count_next[0] = count[1]%1000000000;
            else if (i == 9)
                count_next[9] = count[8]%1000000000;
            else  count_next[i] = (count[i - 1] + count[i + 1])%1000000000;
        }
        for (int i = 0; i < 10; i++)
            count[i] = count_next[i]%1000000000;
    }
    for (int i = 0; i < 10; i++)
    {
        sum = (sum +count[i])%1000000000;
        //printf("%d : %d\n",i, count_next[i]);
    }
    
    printf("%d\n", sum%1000000000);

    

    
    return 0;
}