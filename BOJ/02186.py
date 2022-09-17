import sys
read = sys.stdin.readline

N, M, K = map(int, read().split())
board = [list(read())[:-1] for _ in range(N)]
S = input()
dp = [[[-1] * len(S) for _ in range(M)] for _ in range(N)]

def dfs(Y, X, i):
    if dp[Y][X][i] != -1:
        return dp[Y][X][i]

    if i == len(S)-1:
        return 1

    count = 0
    ys = [*range(Y-K, Y)] + [*range(Y+1, Y+1+K)] + [Y]*K*2
    xs = [X]*K*2 + [*range(X-K, X)] + [*range(X+1, X+1+K)]
    for y, x in zip(ys, xs):
        if y in range(N) and x in range(M) and board[y][x] == S[i+1]:
            count += dfs(y, x, i+1)

    dp[Y][X][i] = count
    return count

answer = 0
for y in range(N):
    for x in range(M):
        if board[y][x] == S[0]:
            answer += dfs(y, x, 0)

print(answer)