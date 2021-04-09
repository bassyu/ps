class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ir, jr = range(len(grid)), range(len(grid[0]))
        ret = 0
        for i in ir:
            for j in jr:
                if grid[i][j] == '1':
                    ret += 1
                    stack = [(i,j)]
                    while stack:
                        ip, jp = stack.pop()
                        grid[ip][jp] = '0'
                        for ig, jg in [(ip+1,jp), (ip-1,jp), (ip,jp+1), (ip,jp-1)]:
                            if ig in ir and jg in jr and grid[ig][jg] == '1':
                                stack.append((ig,jg))
        return ret
