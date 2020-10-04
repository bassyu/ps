N, K = map(int, input().split())


def f(n, u):
    c = 0
    while n:
        n //= u
        c += n

    return c


print(min([f(N, i)-f(K, i)-f(N-K, i)for i in [2, 5]]))
