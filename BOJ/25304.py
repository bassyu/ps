import sys
read = sys.stdin.readline

X = int(read())
N = int(read())
S = 0
for _ in range(N):
    a, b = read().split()
    S += int(a) * int(b)

print('Yes' if X == S else 'No')
