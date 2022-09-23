#include <iostream>
#include <vector>

using namespace std;

bool isSubsequence(string s, string t)
{

    if(s.size()==0 && t.size()==0){
        return true;
    }else if(s.size()==0 && t.size()>0){
        return true;
    }else if(s.size()>0 && t.size()==0){
        return false;
    }
    int row = t.size();
    int column = s.size();
    int **arr = new int *[row + 1];
    for (int i = 0; i < row + 1; ++i)
        arr[i] = new int[column + 1];

    for (int i = 0; i < row + 1; i++)
    {
        for (int j = 0; j < column + 1; j++)
        {
            arr[i][j] = 0;
        }
    }
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; j++)
        {
            cout << t[i] << s[j] << endl;
            if (t[i] == s[j])
            {
                arr[i + 1][j + 1] = arr[i][j] + 1;
            }
            else
            {
                arr[i + 1][j + 1] = arr[i][j + 1] >= arr[i + 1][j] ? arr[i][j + 1] : arr[i + 1][j] ;
                // arr[i + 1][j + 1] = max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
    }
    for (int i = 0; i < row + 1; i++)
    {
        for (int j = 0; j < column + 1; j++)
        {
            cout<< arr[i][j] << " ";
        }
        cout<<endl;
    }
    int min = row>=column?column:row;
    return arr[row][column] == min ? true : false;
}
int main()
{
    string s = "abc";
    string t = "";

    cout << isSubsequence(s, t);

    return 0;
}