from sys import stdin
read = lambda: stdin.readline()[:-1]
N, M = read().split()
d = dict()
for i in range(int(N)):
    num, mon = str(i+1), read()
    d[num] = mon
    d[mon] = num

print('\n'.join([d[read()] for _ in range(int(M))]))