import sys

N, C = map(int, input().split())
x = sorted([int(line) for line in sys.stdin])

left, right = 0, x[-1]-x[0]
while left <= right:
    mid = (left+right)//2
    count, last = 1, x[0]
    for i in range(N):
        if x[i] - last >= mid:
            count += 1
            last = x[i]
    
    if count >= C:
        answer = mid
        left = mid + 1
    else:
        right = mid - 1
        
print(answer)
