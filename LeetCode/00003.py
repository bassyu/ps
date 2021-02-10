class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = 0
        start = -1
        lastUsed = {}
        for i in range(len(s)):
            c = s[i]
            if c in lastUsed and start < lastUsed[c]:
                start = lastUsed[c]
            else:
                m = max(m, i - start)
                
            lastUsed[c] = i
            
        return m
