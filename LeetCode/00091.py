class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0': return 0
        dp = [1, 1]
        for i in range(1, len(s)):
            dp.append(dp[-1] * (s[i] != '0') + dp[-2] * (9 < int(s[i-1:i+1]) < 27))
        return dp[-1]
