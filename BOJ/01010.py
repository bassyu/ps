import sys

dp = [[-1 for _ in range(30)] for _ in range(30)]
def bridge(n, m):
    if dp[n][m] != -1:
        return dp[n][m]
    elif n == m:
        count = 1
    elif n == 1:
        count = m
    else:
        count = sum([bridge(n-1, m-i) for i in range(1, m-n+2)])

    dp[n][m] = count
    return count

input()
for line in sys.stdin:
    N, M = map(int, line.split())
    print(bridge(N, M))
