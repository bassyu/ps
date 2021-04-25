class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        p_visited, a_visited = set(), set()
        def dfs(visited, x, y):
            visited.add((y, x))
            for xg, yg in [(x+1, y), (x-1, y), (x, y+1), (x, y-1)]:
                if xg in range(n) and yg in range(m) and (yg, xg) not in visited and heights[yg][xg] >= heights[y][x]:
                    dfs(visited, xg, yg)
                    
        for i in range(n):
            dfs(p_visited, i, 0)
            dfs(a_visited, i, m-1)
        for i in range(m):
            dfs(p_visited, 0, i)
            dfs(a_visited, n-1, i)
        return list(p_visited.intersection(a_visited))
