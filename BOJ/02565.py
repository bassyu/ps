N = int(input())
l = [i[1] for i in sorted([list(map(int, input().split())) for _ in range(N)])]

dp = [1]
for i in range(1, N):
    dp.append(max([1]+[1+dp[j] for j in range(i) if l[i]>l[j]]))

print(N-max(dp))