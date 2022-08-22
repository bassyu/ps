N = int(input())
board = [[' ' for _ in range(N*2-1)] for _ in range(N)]
def triangle(Y, X, size):
    if size == 3:
        for y in range(3):
            for x in ([2],[1,3],[0,1,2,3,4])[y]:
                board[Y+y][X+x] = '*'
        return
    size //= 2
    triangle(Y, X+size, size)
    triangle(Y+size, X, size)
    triangle(Y+size, X+size*2, size)

triangle(0, 0, N)
for row in board:
    print(''.join(row))
