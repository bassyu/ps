class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        d = [nums[0]]
        for n in nums[1:]:
            d.append(max(n, n + d[-1]))
        return max(d)
