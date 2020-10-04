from math import ceil
l = list(map(int, input().split()))
unit = l[0] - l[1]
print(ceil((l[2]-l[0]) / unit) + 1)
