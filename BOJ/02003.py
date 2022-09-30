N, M = map(int, input().split())
A = [int(i) for i in input().split()]
count = prefix = j = 0
for i in range(N):
    while prefix < M and j < N:
        prefix += A[j]
        j += 1

    if prefix == M:
        count += 1    

    prefix -= A[i]

print(count)