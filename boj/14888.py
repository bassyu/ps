from itertools import permutations

N = int(input())
A = list(map(int, input().split()))
a, s, m, d = map(int, input().split())

rs = list()
for p in set(permutations('+'*a+'-'*s+'*'*m+'/'*d)):
    r = A[0]
    for i in range(1, N):
        r = {'+': r+A[i], '-': r-A[i], '*': r*A[i], '/': int(r/A[i])}[p[i-1]]

    rs.append(r)

print(max(rs))
print(min(rs))
