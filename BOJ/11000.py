import sys
import heapq as hq

read = sys.stdin.readline
N = int(read())
STs = []
for _ in range(N):
    S, T = map(int, read().split())
    STs.append((S, T))

STs.sort()
q = []
answer = 0
for S, T in STs:
    hq.heappush(q, T)
    while q and q[0] <= S:
        hq.heappop(q)

    answer = max(answer, len(q))

print(answer)