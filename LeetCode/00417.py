class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        n, m = len(heights[0]), len(heights)
        state = [[(False, False)] * n for _ in range(m)]
        output = []
        for i in range(m):
            for j in range(n):
                stack = [(j, i)]
                while stack:
                    x, y = stack.pop()
                    s = state[y][x]
                    state[y][x] = ((s[0] or x == 0 or y == 0),
                                   (s[1] or x == n-1 or y == m-1))
                    if all(s):
                        output.append([x, y])
                        break
                    for xg, yg in [(x, y+1), (x, y-1), (x+1, y), (x-1, y)]:
                        if xg in range(n) and yg in range(m) and heights[yg][xg] <= heights[y][x]:
                            stack.append((xg, yg))
        return output
