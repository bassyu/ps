import sys, heapq
read = sys.stdin.readline

N = int(read())
M = int(read())
bus = [[] for _ in range(N+1)]
for _ in range(M):
    a, b, cost = map(int, read().split())
    bus[a].append((cost, b))

start, destination = map(int, read().split())

min_cost = [float('inf')] * (N+1)
min_cost[start] = 0
q = []
heapq.heappush(q, (0, start))
while q:
    cost, origin = heapq.heappop(q)
    if cost > min_cost[origin]:
        continue

    for go_cost, go in bus[origin]:
        new_cost = min_cost[origin] + go_cost
        if new_cost < min_cost[go]:
            min_cost[go] = new_cost
            heapq.heappush(q, (go_cost, go))

print(min_cost[destination])