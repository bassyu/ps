class Solution:
    def climbStairs(self, n: int) -> int:
        d = [0,1]
        for i in range(n):
            d.append(d[i]+d[i+1])
        return d[-1]
