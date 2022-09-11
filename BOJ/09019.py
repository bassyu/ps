import sys, collections
read = sys.stdin.readline

T = int(read())
for _ in range(T):
    A, B = map(int, read().split())
    visited = [False] * 10000
    visited[A] = True
    q = collections.deque([(A, '')])
    while q:
        n, commands = q.pop()
        ns = str(n)
        ns = '0'*(4-len(ns)) + ns
        D = n*2 % 10000
        S = n-1 if n else 9999
        L = int(ns[1:] + ns[0])
        R = int(ns[3] + ns[:3])
        for new, command in zip([D,S,L,R], 'DSLR'):
            if new == B:
                print(commands + command)
                q = []
                break
            if not visited[new]:
                q.appendleft((new, commands + command))
                visited[new] = True
