import sys
read = sys.stdin.readline
sys.setrecursionlimit(10**8)

n = int(read())
tree = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b, weight = map(int, read().split())
    tree[a].append((b, weight))
    tree[b].append((a, weight))

def dfs(node, diameter=0):
    global max_node, max_diameter
    if diameter > max_diameter:
        max_node, max_diameter = node, diameter

    visited.add(node)
    for next_node, weight in tree[node]:
        if next_node not in visited:
            dfs(next_node, diameter+weight)

max_node, max_diameter = 0, 0
visited = set()
dfs(1)
visited = set()
dfs(max_node)
print(max_diameter)