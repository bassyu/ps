class Solution:
    def romanToInt(self, s: str) -> int:
        d = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        res = 0
        prev = d['M']
        for c in s:
            num = d[c]
            res += num
            if prev < num:
                res -= prev*2
            
            prev = num
            
        return res
    
