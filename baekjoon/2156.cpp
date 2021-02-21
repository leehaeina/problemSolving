#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int ans(vector <int> wine, int N)
{
	
	vector <int> total(wine.size());
	total[0] = 0;
	total[1] = wine[1];
	
	total[2] = wine[1] + wine[2];
	int wineCount = N;
	//cout << "hi" << endl;
	if (wineCount == 1) return total[1];
	else if (wineCount == 2) return total[2];
	else {
			
		for (int i = 3; i <= wineCount; i++)
		{
			total[i] = max(total[i - 1], max(total[i - 2] + wine[i], total[i - 3] + wine[i] + wine[i - 1]));
		}

	}
	
	return total[wineCount--];
}
int main()
{
	int N;
	scanf("%d", &N);
	
	vector <int> wine;
	wine.push_back(0);
	for (int i = 1; i <= N; i++)
	{
		int a;
		scanf("%d", &a);
		wine.push_back(a);
	
	}
	
	printf("%d", ans(wine,N));
	return 0;
}
