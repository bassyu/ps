from sys import stdin
input()
l=[]
for i in map(int, stdin):
    l.append(i) if i else l.pop()
print(sum(l))