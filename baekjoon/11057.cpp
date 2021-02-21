#include <iostream>
#include <string>
#include <algorithm>
#include <math.h>
using namespace std;
int main()
{
    int N;
    int count[10] = { 1 }, count_next[10] = { 1 };
    int sum = 0;
    scanf("%d", &N);


    /*count[1] = 9;
    count[2] = 17;
    for (int i = 3; i <= N; i++)
    {

        count[i] = (count[i - 1] * 2-(int)pow(2,i-1)+1 )%1000000000;
    }
    printf("%d", count[N]);*/
    for (int i = 0; i < N; i++)
    {
        for (int j = 1; j < 10; j++) {
            count_next[j] = (count_next[j - 1] + count[j])%10007;
            count[j] = count_next[j]%10007;
        }
       // for (int k = 1; k < 10; k++)
         //   count[k] %= 10007;
    }
    for (int i = 0; i < 10; i++) {
        sum += count[i];
        sum %= 10007;
    }
    printf("%d\n", sum);

    

    
    return 0;
}