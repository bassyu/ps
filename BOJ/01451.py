import sys
read = sys.stdin.readline

N, M = map(int, read().split())
n = [[int(i) for i in read()[:-1]] for _ in range(N)]
dp = [[0 for _ in range(M)] for _ in range(N)]

for y in range(N):
    dp_y = [0]
    for x in range(M):
        dp_y.append(dp_y[-1] + n[y][x])
        dp[y][x] = dp[y-1][x] + dp_y[-1] if y else dp_y[-1]

def get_mul(y, x):
    a =  dp[y][x]
    b = dp[y][-1] - a
    c = dp[-1][x] - a
    d = dp[-1][-1] - a - b - c
    return max((a+b)*c*d, (c+d)*a*b, (a+c)*b*d, (b+d)*a*c)

answer = 0
for y in range(N-1):
    for x in range(M-1):
        answer = max(answer, get_mul(y+1, x))

for y in range(N):
    a = dp[y][-1]
    for i in range(y+1, N):
        b = dp[i][-1] - a
        c = dp[-1][-1] - a - b
        answer = max(answer, a*b*c)

for x in range(M):
    a = dp[-1][x]
    for i in range(x+1, M):
        b = dp[-1][i] - a
        c = dp[-1][-1] - a -b
        answer = max(answer, a*b*c)

print(answer)