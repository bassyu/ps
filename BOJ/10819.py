import itertools

N = int(input())
A = list(map(int, input().split()))
answer = 0
for p in itertools.permutations(A):
    dif = 0
    for i in range(N-1):
        dif += abs(p[i]-p[i+1])

    answer = max(answer, dif)

print(answer)