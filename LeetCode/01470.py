class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        l = []
        for i, j in zip(nums[:n], nums[n:]):
            l += [i, j]
        return l
