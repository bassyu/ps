import sys, collections
read = sys.stdin.readline

for _ in range(int(read())):
    V, E = map(int, read().split())
    graph = {i+1: [] for i in range(V)}
    status = [0] * (V+1)
    for _ in range(E):
        u, v = map(int, read().split())
        graph[u].append(v)
        graph[v].append(u)

    result = 'YES'
    for start in range(1, V+1):
        if status[start] != 0:
            continue
        status[start] = 1
        q = collections.deque([start])
        while q:
            v = q.pop()
            for go in graph[v]:
                if status[go] != 0:
                    if status[v] == status[go]:
                        result = 'NO'
                    continue
                q.appendleft(go)
                status[go] = status[v] * -1
    print(result)