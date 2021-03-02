class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [0] * (target+1)
        dp[0] = 1
        i = 0
        for sub_target in range(1, target+1):
            for num in nums:
                if num <= sub_target:
                    dp[sub_target] += dp[sub_target - num]
            
        return dp[-1]
