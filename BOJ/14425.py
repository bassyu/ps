from sys import stdin
N ,M = stdin.readline().split()
s = set([stdin.readline() for _ in range(int(N))])
print(len([i for i in stdin if i in s]))