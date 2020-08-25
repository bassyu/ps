n = int(input())
l = [0, *map(int, input().split())]

dp = l[:2]
for i in range(2, n+1):
    dp.append(max([dp[i-j]+l[j]for j in range(1, i+1)]))

print(dp[-1])
