import sys
import collections as c

N, M, V = map(int, input().split())
N += 1
l = [[0]*N for _ in ' '*N]
for i in sys.stdin:
    i, j = map(int, i.split())
    l[i][j] = l[j][i] = 1


def d(n, v=[]):
    v += [n]
    for i in range(N):
        if l[n][i] and i not in v:
            d(i, v)
    return v


def b(n, v=[]):
    q = c.deque([n])
    while q:
        n = q.popleft()
        v += [n]
        for i in range(N):
            if l[n][i] and i not in v+list(q):
                q += [i]
    return v


print(*d(V))
print(*b(V))
