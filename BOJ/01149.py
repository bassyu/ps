from sys import stdin

N = int(input())
l = [list(map(int, stdin.readline().split())) for _ in range(N)]
dp = [[1000*N for _ in range(3)] for _ in range(N)]

dp[0] = l[0]
for i in range(1, N):
    for j in range(3):
        for k in range(3):
            if j != k:
                dp[i][j] = min(dp[i][j], l[i][j]+dp[i-1][k])

print(min(dp[-1]))