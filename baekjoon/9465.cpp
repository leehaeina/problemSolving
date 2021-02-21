#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;
int ans(vector <vector<int>> sticker,vector<vector<int>> total,int n)
{
	total[0][0] = sticker[0][0];
	total[0][1] = sticker[1][0] + sticker[0][1];
	total[1][0] = sticker[1][0];
	total[1][1] = sticker[1][1] + sticker[0][0];
	if (n == 1)
	{
		return max(total[0][0], total[1][0]);
	}
	else if (n == 2)
	{
		return max(total[0][1], total[1][1]);

	}
	else
	{
		for (int i = 2; i < n; i++)
		{
			total[0][i] = sticker[0][i] + max(total[1][i - 1], total[1][i - 2]);
			total[1][i] = sticker[1][i] + max(total[0][i - 1], total[0][i - 2]);

		}
		return max(total[0][n - 1], total[1][n - 1]);
	}



}
int main()
{
	int T;
	scanf("%d", &T);
	while (T--)
	{
		int n;
		scanf("%d", &n);
		vector<vector<int>> sticker(2, vector<int>(n ));
		vector<vector<int>> total(2, vector<int>(n));
		for (int i = 0; i < 2; i++)
		{
			for (int j = 0; j < n; j++)
			{
				int a;
				scanf("%d", &a);
				sticker[i][j] = a;
				
			}
			
		}

		printf("%d\n", ans(sticker,total,n));
		
	}
	return 0;
}