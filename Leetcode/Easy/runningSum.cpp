#include <iostream>
#include <vector>

using namespace std;
int main(){
    // vector <int> arr = {1,2,3,4};
    vector <int> nums = {3,1,2,10,1};
    for(int i=1;i<nums.size();i++){
        nums[i] += nums[i-1];
    }
    for(auto i: nums){
        cout << i << " ";
    }
    return 0;
}