import sys
from bisect import bisect_left, bisect_right


def get_subsums(array, length):
    subsums = [sum(array[:length])]
    for count in range(1, length):
        for i in range(length):
            sub = array[i:i+count]
            subsums.append(sum(sub))
    
    return sorted(subsums)


def get_count(array, find):
    count = bisect_right(array, find) - bisect_left(array, find)
    return count


read = sys.stdin.readline
want = int(read())
m, n = map(int, read().split())
A = [int(read()) for _ in range(m)] * 2
B = [int(read()) for _ in range(n)] * 2

As = get_subsums(A, m)
Bs = get_subsums(B, n)

answer = get_count(As, want) + get_count(Bs, want)
for subsum in As:
    answer += get_count(Bs, want - subsum)

print(answer)