class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        m = 0
        for a in accounts:
            m = max(m, sum(a))
        return m
