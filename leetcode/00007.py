class Solution:
    def reverse(self, x: int) -> int:
        if not x:
            return x
        s = str(x)[::-1]
        if s[0] == '0':
            s = s[1:]
        if s[-1] == '-':
            s = '-' + s[:-1]
        i = int(s)
        return i if i in range(-2**31, 2**31) else 0
