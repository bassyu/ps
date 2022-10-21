def f(n, a, b, c):
    if n == 1:
        print(a, c)
    else:
        f(n-1, a, c, b)
        print(a, c)
        f(n-1, b, a, c)

N = int(input())
print(2**N-1)
f(N, 1, 2, 3)
