import sys
read = sys.stdin.readline
S = read()
q = int(read())

cumulate = dict()
for a in map(chr, range(97, 123)):
    cumulate[a] = [0]
    for c in S:
        cumulate[a].append(cumulate[a][-1] + (a == c))
    
for _ in range(q):
    a, l, r = read().split()
    print(cumulate[a][int(r)+1]-cumulate[a][int(l)])
