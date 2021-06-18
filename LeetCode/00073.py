class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row, col = range(len(matrix)), range(len(matrix[0]))
        zrow, zcol = set(), set()
        for r in row:
            for c in col:
                if not matrix[r][c]:
                    zrow.add(r)
                    zcol.add(c)    
                    
        for r in zrow:
            for c in col:
                matrix[r][c] = 0
                
        for r in row:
            for c in zcol:
                matrix[r][c] = 0
