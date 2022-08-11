def mat_mul(a, b, mod=10**9+7):
    c = [[0,0], [0,0]]
    for row in range(2):
        for col in range(2):
            c[row][col] = sum([a[row][i] * b[i][col] for i in range(2)]) % mod
    
    return c

n = int(input())
answer = [[1,0], [0,1]]
a = [[1,1], [1,0]]

while n > 0:
    if n % 2:
        answer = mat_mul(answer, a)
    
    a = mat_mul(a, a)
    n //= 2

print(answer[0][1])