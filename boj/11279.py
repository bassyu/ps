import sys
import heapq as h
input()
l = []
for i in map(int, sys.stdin):
    if i:
        h.heappush(l, -i)
    else:
        print(-h.heappop(l)if l else 0)
