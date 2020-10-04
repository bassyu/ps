import collections as c
N, M = map(int, input().split())
l = [[*map(int, input())]for _ in ' '*N]
q = c.deque([(0, 0)])
v = [M*[1]]*N
x = [-1, 0, 1, 0]
y = x[::-1]
while sum(q[0]) != N+M-3:
    I, J = q.popleft()
    for i, j in [(I+x[k], J+y[k])for k in range(4)]:
        if i+1 and j+1 and i < N and j < M and l[i][j] and v[i][j]:
            q.append((i, j))
            v[i][j] = 0
            l[i][j] = l[I][J]+1
i, j = q[0]
print(l[i][j]+1)
