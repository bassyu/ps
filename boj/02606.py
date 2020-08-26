n = int(input())

g = {k: []for k in range(1, n+1)}
for _ in range(int(input())):
    i, j = map(int, input().split())
    g[i] += [j]
    g[j] += [i]

s, v = [1], [0 for _ in range(n+1)]
while s:
    i = s.pop()
    v[i] = 0
    for j in g[i]:
        if v[j]-1:
            s += [j]

print(sum(v))
