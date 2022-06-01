from sys import stdin

read = lambda: stdin.readline()[:-1]
N, M = read().split()
never = set([read() for _ in range(int(N))]) & set([read() for _ in range(int(M))])
print(len(never))
print('\n'.join(sorted(never)))