from itertools import combinations_with_replacement

N, M = map(int, input().split())
print('\n'.join(map(' '.join, combinations_with_replacement(map(str, range(1, N+1)), M))))
