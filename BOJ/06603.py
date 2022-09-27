import itertools

while True:
    i = list(map(int, input().split()))
    if i == [0]:
        break
    k, S = i[0], i[1:]
    perms = itertools.combinations(S, 6)
    for perm in perms:
        print(*perm)

    print()