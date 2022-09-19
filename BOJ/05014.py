import collections
F, S, G, U, D = map(int, input().split())

visited = [0]*(F+1)
visited[S] = 1
q = collections.deque([(S, 0)])
while q:
    floor, count = q.pop()
    if floor == G:
        print(count)
        exit()
    count += 1
    for go in [floor+U, floor-D]:
        if go in range(1, F+1) and not visited[go]:
            visited[go] = 1
            q.appendleft((go, count))

print('use the stairs')