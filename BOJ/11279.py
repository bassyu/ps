import sys
import heapq as h
input()
l = []
for i in map(int, sys.stdin):
    h.heappush(l, -i)if i else print(-h.heappop(l)if l else 0)
