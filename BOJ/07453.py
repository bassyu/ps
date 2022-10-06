import sys

read = sys.stdin.readline
n = int(read())
a, b, c, d = [], [], [], []
for _ in range(n):
    for l, i in zip([a,b,c,d], map(int, read().split())):
        l.append(i)

ab = []
cd = {}
for i in range(n):
    for j in range(n):
        ab.append(a[i] + b[j])
        cd[c[i] + d[j]] = cd.get(c[i] + d[j], 0) + 1

count = 0
for i in ab:
    count += cd.get(-i, 0)

print(count)