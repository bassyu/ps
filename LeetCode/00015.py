class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = sorted(nums)
        length = len(n)
        positive = length
        for i in range(length):
            if n[i] > 0:
                positive = i
                break
        output = []
        for i in range(positive):
            if i > 0 and n[i] == n[i-1]: continue
            
            l, r = i + 1, length - 1
            while l < r:
                s = n[i] + n[l] + n[r]
                if s < 0:
                    l += 1
                elif 0 < s:
                    r -= 1
                else:
                    output.append([n[i], n[l], n[r]])
                    while l < r and n[l] == n[l+1]: 
                        l += 1
                    while l < r and n[r] == n[r-1]: 
                        r -= 1
                    l, r = l+1, r-1
                    
        return output
