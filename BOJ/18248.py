inp = [int(i) for i in input().split(' ')]
table = [input().split(' ') for _ in range(inp[0])]

for i in range(inp[1]):
    table = sorted(table, key=lambda x: x[i])

for col in range(inp[1]):
    for row in range(inp[0]-1):
        if table[row][col] > table[row+1][col]:
            print('NO')
            exit()

print('YES')