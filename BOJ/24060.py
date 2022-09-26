N, K = map(int, input().split())
A = [int(i) for i in input().split()]
count = 0
def merge_sort(p, r):
    if p < r:
        q = (p + r) // 2 
        merge_sort(p, q)
        merge_sort(q + 1, r)
        merge(p, q, r)
    
def merge(p, q, r):
    global A, count
    i, j = p, q+1
    tmp = []
    while i <= q and j <= r:
        if A[i] <= A[j]:
            tmp.append(A[i])
            i += 1
        else:
            tmp.append(A[j])
            j += 1
    
    while i <= q:
        tmp.append(A[i])
        i += 1

    while j <= r:
        tmp.append(A[j])
        j += 1

    i, t = p, 0
    while i <= r:
        count += 1
        if count == K:
            print(tmp[t])
            exit()

        A[i] = tmp[t]
        i, t = i+1, t+1

merge_sort(0, len(A)-1)
print(-1)