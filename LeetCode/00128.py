class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        m, s = 0, set(nums)
        for num in nums:
            cur = 1
            for x in [1, -1]:
                i = 1
                while num+x*i in s:
                    s.remove(num+x*i)
                    cur, i = cur+1, i+1
            m = max(m, cur)
        return m
