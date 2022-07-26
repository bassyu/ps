from sys import stdin
read = stdin.readline

read()
cumulate = [0]
for i in map(int, read().split()):
    cumulate.append(cumulate[-1] + i)

for line in stdin:
    i, j = map(int, line.split())
    print(cumulate[j] - cumulate[i-1])