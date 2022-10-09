N, L = map(int, input().split())
leaks = [0] * 1001
for i in map(int, input().split()):
    leaks[i] = 1

tape = 0
count = 0
for i in range(1001):
    if tape == 0 and leaks[i]:
        tape = L - 1
        count += 1
    elif tape:
        tape -= 1

print(count)