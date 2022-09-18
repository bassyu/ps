import sys
read = sys.stdin.readline

def link_graph(y, x, i):
    n = board[y][x]
    if n != -1:
        graph[i].add(n)
        graph[n].add(i)
    board[y][x] = i

N = int(read())
board = [[-1]*1001 for _ in range(1001)]
graph = {i: set() for i in range(N)}
for i in range(N):
    x1, y1, x2, y2 = map(lambda x: int(x)+500, read().split())
    for y in [y1, y2]:
        for x in range(x1, x2+1):
            link_graph(y, x, i)

    for y in range(y1, y2+1):
        for x in [x1, x2]:
            link_graph(y, x, i)

answer = 0
visited = set()
for i in range(N):
    if i in visited:
        continue
    answer += 1
    stack = [i]
    while stack:
        n = stack.pop()
        for go in graph[n]:
            if go in visited:
                continue
            visited.add(go)
            stack.append(go)

if board[500][500] != -1:
    answer -= 1
print(answer)