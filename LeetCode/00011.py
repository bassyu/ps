class Solution:
    def maxArea(self, height: List[int]) -> int:
        width = len(height)-1
        l, r = 0, width
        m = 0
        for w in range(width, 0, -1):
            if height[l] < height[r]:
                m, l = max(m, height[l]*w), l+1
            else:
                m, r = max(m, height[r]*w), r-1
        return m
