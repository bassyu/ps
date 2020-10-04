l = [False, False] + [True]*1000000
n_l = len(l)-1
for i in range(2, n_l//2):
    if l[i]:
        l[i*2::i] = [False] * (n_l//i-1)

M, N = map(int, input().split())
l = [i for i in range(M, N+1) if l[i]]

for i in l:
    print(i)
