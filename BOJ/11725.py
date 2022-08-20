import sys
read = sys.stdin.readline

N = int(read())
graph = {i: [] for i in range(1,N+1)}
for _ in range(N-1):
    a, b = map(int, read().split())
    graph[a].append(b)
    graph[b].append(a)

stack = [1]
visited = {1}
answers = [0] * (N+1)
while stack:
    node = stack.pop()
    for child in graph[node]:
        if child not in visited:
            stack.append(child)
            visited.add(child)
            answers[child] = str(node)

print('\n'.join(answers[2:]))