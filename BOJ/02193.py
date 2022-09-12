N = int(input())
dp = [0, 1, 1]
for _ in range(N-2):
    dp.append(dp[-2]+dp[-1])

print(dp[N])