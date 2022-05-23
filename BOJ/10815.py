N = input()
s = set(map(int, input().split()))
M = input()
print(*[int(i in s) for i in map(int, input().split())])