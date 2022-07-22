from sys import stdin

read = stdin.readline
K, N = map(int, read().split())
l = [int(read()) for _ in range(K)]

left, right = 1, max(l)
while left <= right:
    mid = (left + right) // 2
    count = sum([i//mid for i in l])
    if count >= N:
        left = mid + 1
        answer = mid
    else:
        right = mid - 1

print(answer)