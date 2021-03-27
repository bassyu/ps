class Solution:
    def rob(self, nums: List[int]) -> int:
        m = min(nums)
        for nums in [nums[:-1], nums[1:]]:
            dp = [0] + nums[:2]
            for num in nums[2:]:
                dp.append(num + max(dp[-2], dp[-3]))
            m = max(m, max(dp[-2:]))
        return m
