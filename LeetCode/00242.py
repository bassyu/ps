class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dic = {chr(c): 0 for c in range(97, 123)}
        for c in s: dic[c] += 1
        for c in t: dic[c] -= 1        
        return set(dic.values()) == {0}
