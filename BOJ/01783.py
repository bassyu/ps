N, M = map(int, input().split())
a = 0
if 1 in(N,M): a = 1
elif N == 2:  a = min((M+1)//2, 4)
elif M <= 6:  a = min(M, 4)
else:         a = M-2
print(a)