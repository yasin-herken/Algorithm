#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> nums = {-1, -1, 0, 0,-1, -1};
    // vector <int> nums = {1,7,3,6,5,6};
    int leftSum = 0;
    int sum = 0;
    for (auto i : nums)
    {
        sum += i;
    }
    int rightSum = sum;
    int result = -1;
    for (int i = 0; i < nums.size(); i++)
    {
        rightSum = sum - nums[i] - leftSum;
        if (leftSum == rightSum)
        {
            result = i;
            break;
        }
        leftSum += nums[i];
    }
    cout << result << endl;
    return 0;
}