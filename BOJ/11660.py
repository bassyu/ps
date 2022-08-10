import sys, itertools
read = sys.stdin.readline

N, M = map(int, read().split())

dp = [[0 for _ in range(N+1)] for _ in range(N+1)]
for x in range(1, N+1):
    row = list(itertools.accumulate(map(int, read().split())))
    for y in range(1, N+1):
        dp[x][y] = dp[x-1][y] + row[y-1]

for _ in range(M):
    x1, y1, x2, y2 = map(int, read().split())
    print(dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1-1] + dp[x1-1][y1-1])