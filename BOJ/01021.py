from sys import stdin
from collections import deque

N, M = map(int, input().split())
ii = list(map(int, input().split()))
l = deque(range(1, N+1))
r = 0

for i in ii:
    c = 0
    while l[0] != i:
        c += 1
        l.append(l.popleft())
    
    r += min(c, abs(len(l) - c))
    l.popleft()

print(r)
