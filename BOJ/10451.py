import sys
read = sys.stdin.readline

for _ in range(int(read())):
    N = int(read())
    graph = [0]+[*map(int, read().split())]
    visited = set()
    count = 0
    for start in range(1, N+1):
        if start in visited:
            continue
        count += 1
        stack = [start]
        while stack:
            node = stack.pop()
            visited.add(node)
            go = graph[node]
            if go in visited:
                continue
            stack.append(go)

    print(count)