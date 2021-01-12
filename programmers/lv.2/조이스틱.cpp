#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int sum (const vector<int> & v) {
    int result = 0;
    
    for (const auto & elem : v) {
        result += elem;
    }
    
    return result;
}

int solution(string name) {
    int n = name.size();
    vector<int> m (n);
    
    for (int i=0; i<n; i++) {
        m[i] = min( name[i]-'A', 'Z'-name[i] + 1 ); //더 작은걸루  일단 넣음 
    }
    
    int answer = 0;
    int where = 0;
    
    while (true) {
        answer += m[where];
        m[where] = 0;
        
    
        
        int left = 0, right = 0;
        int leftIdx = where, rightIdx = where;
        
        while (m[leftIdx] <= 0) {
            left += 1;
            leftIdx = (leftIdx <= 0) ? (n - 1) : (leftIdx - 1);
        }
        
        while (m[rightIdx] <= 0) {
            right += 1;
            rightIdx = (rightIdx + 1) % n;
        }
        
        answer += (left < right) ? left : right;
        where = (left < right) ? leftIdx : rightIdx;
    }
    
    return answer;
}