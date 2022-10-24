from sys import stdin
from collections import defaultdict as dd

input()
d=dd(int)
for i in map(int, stdin):
    d[i]+=1

l = sorted(sorted(d.items(), key=lambda x: x[0]), key=lambda x: x[1], reverse=True)
print(l[0][0])