class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        r = range(len(nums))
        output = []
        
        p = 1
        for i in r:
            output.append(p)
            p *= nums[i]
            
        p = 1
        for i in r[::-1]:
            output[i] *= p
            p *= nums[i]
            
        return output
