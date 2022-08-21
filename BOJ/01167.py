import sys
read = sys.stdin.readline

V = int(read())
tree = [[] for _ in range(V+1)]
for _ in range(V):
    info = list(map(int, read().split()))
    for i in range(1, len(info)-1, 2):
        tree[info[0]].append((info[i], info[i+1]))

def dfs(node, diameter=0):
    global max_node, max_diameter
    if diameter > max_diameter:
        max_node, max_diameter = node, diameter

    visited.add(node)
    for next_node, weight in tree[node]:
        if next_node not in visited:
            dfs(next_node, diameter + weight)

max_node, max_diameter = 0, 0
visited = set()
dfs(1)
visited = set()
dfs(max_node)
print(max_diameter)