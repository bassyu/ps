from collections import defaultdict

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        dic = defaultdict(int)
        for num in nums:
            if dic[num] < 2: dic[num] += 1
                
        output = []
        for key in dic.keys():
            output += [key]*dic[key]

        l = len(output)
        for i in range(l):
            nums[i] = output[i]
        
        return l
