import sys
read = sys.stdin.readline

R, C = map(int, read().split())
board = [read()[:-1] for _ in range(R)]
alpha = [0]*91
answer = 0
def dfs(Y, X, length):
    global answer
    answer = max(answer, length)
    for y, x in [(Y,X+1), (Y,X-1), (Y-1,X), (Y+1,X)]:
        if y in range(R) and x in range(C):
            i = ord(board[y][x])
            if alpha[i] == 0:
                alpha[i] = 1
                dfs(y, x, length+1)
                alpha[i] = 0

alpha[ord(board[0][0])] = 1
dfs(0, 0, 1)
print(answer)