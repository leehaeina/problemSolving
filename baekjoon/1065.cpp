#include <iostream>
#include <vector>
using namespace std;
bool hansu(int num);
int main()
{
	int num;
	cin >> num;
	int *arr = new int[num];
	vector <int> result;
	int count = 0;
	for (int i = 1; i < num+1; i++)
	{
		if (i < 100) count++;
		else if (hansu(i)) count++;
		
	}
	cout << count;
	return 0;
}
bool hansu(int num)
{

	if (num < 100) return true;
	else
	{
		vector<int> v;
		int  count = 0;
		int precount = 0;
		int h = 0;
		while (num > 9)
		{
		
			int cel = 0;
			cel = num % 10;
			num /= 10;
			count = (num % 10) - cel;
			if (h == 0) precount = count;
			if (precount != count) {
				return false;  break;
			}
			h++;

		}
		//if (h < 2) return false;
		return true;

	}
}