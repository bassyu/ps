N = int(input())
M = int(input())
length = len(str(N))
if M == 0:
    print(min(length, abs(100-N)))
    exit()
able = set('0123456789').difference(set(input().split()))
answer = abs(100 - N)
for i in range(1000000):
    if set(str(i)) <= able:
        answer = min(answer, len(str(i)) + abs(i - N))

print(answer)
