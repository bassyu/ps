class Solution:
    def canJump(self, nums: List[int]) -> bool:
        m = 0
        for num in nums[:-1]:
            if num:
                m = max(m-1, num)
            else:
                m -= 1
                if m <= 0: return False
        return True
