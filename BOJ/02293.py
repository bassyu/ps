n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]

memo = [0 for i in range(0, k + 1)]
memo[0] = 1

for coin in coins:
  for i in range(coin, k + 1):
    memo[i] = memo[i] + memo[i - coin]

print(memo[k])
