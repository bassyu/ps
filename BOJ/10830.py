N, B = map(int, input().split())
matrix = []
for _ in range(N):
    matrix.append([int(i) % 1000 for i in input().split()])

def matrix_square(n):
    if n == 1:
        return matrix
    if n % 2 == 0:
        a = b = matrix_square(n//2)
    else:
        a, b = matrix_square(n-1), matrix

    output = [[0 for _ in range(N)] for _ in range(N)]
    for y in range(N):
        for x in range(N):
            output[y][x] = sum([a[y][i] * b[i][x] for i in range(N)]) % 1000

    return output

for row in matrix_square(B):
    print(*row)
