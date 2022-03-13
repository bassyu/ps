N, M = map(int, input().split())
trees = list(map(int, input().split()))

left, right = 0, 10**9
while left <= right:
    mid = (left+right)//2
    get = sum([max(tree-mid, 0) for tree in trees])
    if get >= M:
        answer = mid
        left = mid+1
    else:
        right = mid-1
        
print(answer)
