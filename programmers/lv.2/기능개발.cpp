// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    vector<int> date(progresses.size());
    answer.push_back(1);
    int day;
    int flag=0;
    for(int i = 0;i<progresses.size();i++)
    {
        int remain = (100-progresses[i])%speeds[i];
        if (remain==0) date[i] = (100-progresses[i])/speeds[i];
        else date[i] = (100-progresses[i])/speeds[i] +1;
    }
    for(int i = 1;i<date.size();i++)
    {
        if(date[flag]>=date[i]) answer.back()++;
        else {
            answer.push_back(1);
            flag = i;
        }
    }
    
    return answer;
}