import collections

N, K = map(int, input().split())
q, visited = collections.deque([(N, 0)]), [False] * 100001
while q:
    n, time = q.pop()
    if n == K:
        print(time)
        break
    for go in [n-1, n*2, n+1]:
        if go > 100000 or go < 0:
            continue
        if not visited[go]:
            visited[go] = True
            q.appendleft((go, time + 1))