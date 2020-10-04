import itertools as t

N, M = map(int, input().split())
r = range(N)
l = [[*map(int, input().split())]for _ in r]
c = []
for i in r:
    for j in r:
        if l[i][j] == 2:
            c += [[i, j]]
d = []
for i in r:
    for j in r:
        if l[i][j] == 1:
            d += [[abs(i-y)+abs(j-x)for y, x in c]]
m = []
for c in t.combinations(range(len(c)), M):
    m += [sum([min([r[i]for i in c])for r in d])]

print(min(m))
