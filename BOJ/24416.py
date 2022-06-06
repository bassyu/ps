n = int(input())
dp = [1, 1]
for i in range(n-2):
    dp.append(dp[-1] + dp[-2])

print(dp[-1], n-2)