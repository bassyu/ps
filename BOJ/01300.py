N = int(input())
k = int(input())
left, right = 0, N*N
while left <= right:
    mid = (left+right)//2 # B[k]
    index = 0 # k
    for i in range(1,N+1):
        index += min(mid//i, N)
    
    if index >= k:
        answer = mid
        right = mid - 1
    else:
        left = mid + 1
    
print(answer)
