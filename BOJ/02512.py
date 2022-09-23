N = int(input())
want = list(map(int, input().split()))
M = int(input())
l, r = 0, M
while l <= r:
    m = (l+r) // 2
    budget = [min(m, i) for i in want]
    if M >= sum(budget):
        answer = max(budget)
        l = m+1
    else:
        r = m-1

print(answer)