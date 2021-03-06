class Solution:
    def rob(self, nums: List[int]) -> int:
        dp = [0] + nums[:2]
        for num in nums[2:]:
            dp.append(num + max(dp[-2], dp[-3]))
        
        return max(dp)
