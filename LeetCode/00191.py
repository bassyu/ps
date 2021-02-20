class Solution:
    def hammingWeight(self, n: int) -> int:
        return len([c for c in bin(n) if c == '1'])
