import sys
read = sys.stdin.readline

dp = [0,1,2,4]
for _ in range(8):
    dp.append(sum(dp[-3:]))

T = int(read())
for _ in range(T):
    n = int(read())
    print(dp[n])