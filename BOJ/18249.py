import sys
read = sys.stdin.readline

dp, mod = [1, 1], 10**9 + 7
for _ in range(191229):
    dp.append((dp[-1] + dp[-2]) % mod)

T = int(read())
for _ in range(T):
    N = int(read())
    print(dp[N])