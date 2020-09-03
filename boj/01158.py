N, K = map(int, input().split())
l = [*range(1, N+1)]
p = []
i = 0
while l:
    i = (i+K-1) % len(l)
    p.append(l.pop(i))
print('<'+str(p)[1:-1]+'>')
