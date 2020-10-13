N = int(input())
l = list(map(int, input().split()))

dp = [[1], [1]]
for i in range(1, N):
    dp[0].append(max([1] + [1+dp[0][j] for j in range(i) if l[j]<l[i]]))
    dp[1].append(max([1] + [1+dp[1][j] for j in range(i) if l[-(j+1)]<l[-(i+1)]]))

dp[1].reverse()
print(max([dp[0][i]+dp[1][i] for i in range(N)])-1)