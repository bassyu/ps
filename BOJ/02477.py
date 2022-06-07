K = int(input())
x = y = 0
l = []
for _ in range(6):
    direction, length = map(int, input().split())
    if direction in [1, 2]:
        x = max(x, length)
    else:
        y = max(y, length)
    l.append([direction, length])

l *= 2
for i in range(9):
    if l[i][0] == l[i+2][0] and l[i+1][0] == l[i+3][0]:
        empty = l[i+1][1] * l[i+2][1]

print(K * (x * y - empty))