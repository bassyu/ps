N = int(input())
l = [[*map(int,input().split())] for _ in range(N)]
p = [0, 0, 0]
def f(X, Y, s):
    n = l[Y][X]
    for y in range(Y, Y+s):
        for x in range(X, X+s):
            if n != l[y][x]:
                s //= 3
                [[f(j, i, s) for j in [X, X+s, X+s+s]] for i in [Y, Y+s, Y+s+s]]
                return 0
            n = l[y][x]
    
    p[n+1] += 1

f(0, 0, N)
for i in p:
    print(i)