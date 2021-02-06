class Solution:
    def isValid(self, s: str) -> bool:
        d = {'(': ')', '{': '}', '[': ']'}
        k = d.keys()
        t = []
        for c in s:
            if not c in k:
                if not t or d[t.pop()] != c:
                    return False
            else:
                t.append(c)
            
        return not t
