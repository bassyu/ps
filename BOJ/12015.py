import bisect as b

N = int(input())
A = list(map(int, input().split()))

lis = A[:1]
for i in range(1, N):
    a = A[i]
    if a > lis[-1]:
        lis.append(a)
    else:    
        index = b.bisect_left(lis, a)
        lis[index] = a

print(len(lis))