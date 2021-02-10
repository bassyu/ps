class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        m = prices[0]
        r = 0
        for p in prices:
            if m < p: 
                r = max(r, p - m)
            m = min(m, p)
            
        return r
