N, S = map(int, input().split())
l = [int(i) for i in input().split()]
prefix, j, answer = 0, 0, float('inf')
for i in range(N):
    while prefix < S and j < N:
        prefix += l[j]
        j += 1

    if prefix >= S:
        answer = min(answer, j-i)

    prefix -= l[i]

print(answer if answer != float('inf') else 0)