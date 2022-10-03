from itertools import combinations
from bisect import bisect_left, bisect_right


def get_subsums(array):
    subsums = []
    for length in range(1, len(array)+1):
        for sub in combinations(array, length):
            subsums.append(sum(sub))

    return sorted(subsums)


def get_count(array, number):
    return bisect_right(array, number) -  bisect_left(array, number)


N, S = map(int, input().split())
A = [int(i) for i in input().split()]
mid = N // 2
l_subsums, r_subsums = get_subsums(A[:mid]), get_subsums(A[mid:])

answer = get_count(l_subsums, S) + get_count(r_subsums, S)
for l_subsum in l_subsums:
    answer += get_count(r_subsums, S - l_subsum)

print(answer)
