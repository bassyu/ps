from sys import stdin
T = int(input())
l = [int(stdin.readline()) for _ in range(T)]
f = [[1, 0], [0, 1]]
for i in range(2, max(l)+1):
    f.append([f[i-2][0]+f[i-1][0], f[i-2][1]+f[i-1][1]])

for i in l:
    print(' '.join(map(str, f[i])))
