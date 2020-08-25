I = int
l = [[*map(I, input().split())]for _ in range(I(input()))]
d = [0]
for i in l[::-1]:
    d += [max(I(i[0] > len(d))*(d[-i[0]]+i[1]), d[-1])]
print(d[-1])
