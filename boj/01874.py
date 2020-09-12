from sys import stdin
input()
n = 0
s, p = [], []
for i in map(int, stdin):
    if s and s[-1] > i:
        print('NO')
        exit()

    while not s or s[-1] < i:
        n += 1
        s.append(n)
        p.append('+')

    s.pop()
    p.append('-')

print('\n'.join(p))
