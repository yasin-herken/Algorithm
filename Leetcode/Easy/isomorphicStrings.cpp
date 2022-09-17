#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <unordered_map>
using namespace std;

int main()
{
  string s = "paper";
  string t = "title";
  int n = s.size();
  unordered_map<char, int> m, p;
  bool result = true;
  for (int i = 0; i < n; i++)
  {
    if (m[s[i]])
      if (m[s[i]] != t[i])
      {
        result = false;
        break;
      }
    if (p[t[i]])
      if (p[t[i]] != s[i])
      {
        result = false;
        break;
      }

    m[s[i]] = t[i];
    p[t[i]] = s[i];
  }
  cout << result << endl;
  return 0;
}