import sys
read = sys.stdin.readline

N = int(read())
seq, neg, zero, one = [], 0, 0, 0
for _ in range(N):
    i = int(read())
    seq.append(i)
    neg += i < 0
    zero += i == 0
    one += i == 1

seq.sort()
answer = one
for i in range(0, neg-1, 2):
    answer += seq[i] * seq[i+1]

if neg%2 and not zero:
    answer += seq[neg-1]

for i in range(N-1, neg+zero+one, -2):
    answer += seq[i] * seq[i-1]

if (N-neg-zero-one) % 2:
    answer += seq[neg+zero+one]

print(answer)