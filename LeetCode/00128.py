class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums: return 0
        nums = sorted(set(nums))
        m = 1
        cur = 1
        for i in range(1, len(nums)):
            if nums[i] - nums[i-1] != 1:
                m = max(m, cur)
                cur = 1
                continue
            cur += 1
        return max(m, cur)
