class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxl = [nums[0]]
        minl = [nums[0]]
        for n in nums[1:]:
            maxl.append(max(n,
                            n * maxl[-1], 
                            n * minl[-1]))
            minl.append(min(n,
                            n * maxl[-2], 
                            n * minl[-1]))
        return max(maxl)
