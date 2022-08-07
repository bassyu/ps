import sys
read = sys.stdin.readline

T = int(read())
for _ in range(T):
    N = int(read())
    nine = int('9' * len(str(N)))
    mid = nine // 2
    if N >= mid:
        answer = mid * (mid+1)
    else:
        answer = N * (nine-N)

    print(answer)
