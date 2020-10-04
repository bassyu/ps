l = [[*map(int, input().split())]for i in range(int(input()))]
dp = [0]
for i in l[::-1]:
    dp += [max(0 if i[0] > len(dp)else dp[-i[0]]+i[1], dp[-1])]
print(dp[-1])
