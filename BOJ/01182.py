import itertools

N, S = map(int, input().split())
l = [int(i) for i in input().split()]
count = 0
for i in range(1, N+1):
    for comb in itertools.combinations(l, i):
        if sum(comb) == S:
            count += 1

print(count)