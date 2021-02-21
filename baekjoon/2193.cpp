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
    
    long long int count[100];
    count[1] = 1;
    count[2] = 1;
    for (int i = 3; i <= N; i++)
        count[i] = count[i - 1] + count[i - 2];
 
    
    printf("%lld\n", count[N]);

    

    
    return 0;
}