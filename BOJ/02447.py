def f(x, y, N):
    if N == 1:
        l[x][y] = '*'
        return
    
    N //= 3
    for i in range(3):
        for j in range(3):
            if not (i==1 and j==1):
                f(x + i*N, y + j*N, N)

N = int(input())
l = [[' ' for _ in range(N)] for _ in range(N)]
f(0, 0, N)
print('\n'.join([''.join(r) for r in l]))
