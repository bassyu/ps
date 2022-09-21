import sys, heapq
read = sys.stdin.readline

V, E = map(int, read().split())
K = int(read())
graph = [[] for _ in range(V+1)]
for _ in range(E):
    u, v, w = map(int, read().split())
    graph[u].append((v, w))

shortest = [float('inf')] * (V+1)
shortest[K] = 0
q = []
heapq.heappush(q, (0, K))
while q:
    dist, node = heapq.heappop(q)
    if dist > shortest[node]:
        continue

    for go_node, go_dist in graph[node]:
        new_dist = shortest[node] + go_dist
        if new_dist < shortest[go_node]:
            shortest[go_node] = new_dist
            heapq.heappush(q, (new_dist, go_node))

for i in shortest[1:]:
    if i == float('inf'):
        print('INF')
    else:
        print(i)