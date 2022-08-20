import sys
sys.setrecursionlimit(10**8)
read = sys.stdin.readline

def dfs(node):
    visited.add(node)
    cycle.append(node)
    next_node = graph[node]
    if next_node in visited:
        if next_node in cycle:
            global n
            n -= len(cycle[cycle.index(next_node):])
        return
    dfs(next_node)
        

T = int(read())
for _ in range(T):
    n = int(read())
    graph = [0] + [int(i) for i in read().split()]
    visited = set()
    for node in range(1, n+1):
        if not node in visited:
            cycle = []
            dfs(node)
    print(n)
