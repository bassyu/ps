class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs: return ''
        p = strs[0]
        for s in strs[1:]:
            c = ''
            for i in range(len(min(p,s))):
                if p[i] != s[i]:
                    break
                c += p[i]
            p = c
        return p
