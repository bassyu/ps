N, S = map(int, input().split())
l = [int(i) for i in input().split()]
prefix, right, answer = 0, 0, float('inf')
for left in range(N):
    while prefix < S and right < N:
        prefix += l[right]
        right += 1

    if prefix >= S:
        answer = min(answer, right-left)

    prefix -= l[left]

print(answer if answer != float('inf') else 0)