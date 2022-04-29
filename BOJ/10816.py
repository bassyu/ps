from collections import defaultdict

d = defaultdict(int)
input()
for i in map(int, input().split()):
    d[i] += 1
input()
print(*[d[i] for i in map(int, input().split())])