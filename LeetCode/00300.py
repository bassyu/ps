class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [1]
        for i in range(1, len(nums)):
            dp.append(max([0]+[dp[j] for j in range(i)if nums[j] < nums[i]]) + 1)
        return max(dp)
