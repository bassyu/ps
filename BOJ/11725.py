import sys
read = sys.stdin.readline

N = int(read())
graph = {i: [] for i in range(1,N+1)}
for _ in range(N-1):
    a, b = map(int, read().split())
    graph[a].append(b)
    graph[b].append(a)

stack = [1]
answer = [False] * (N+1)
while stack:
    node = stack.pop()
    for child in graph[node]:
        if not answer[child]:
            stack.append(child)
            answer[child] = str(node)

print('\n'.join(answer[2:]))