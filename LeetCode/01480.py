class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        d = [0]
        for i in nums:
            d.append(d[-1]+i)
        return d[1:]
