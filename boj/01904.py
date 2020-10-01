N = int(input())
f = [1, 1]
for i in range(2, N+1):
    f.append((f[-2]+f[-1]) % 15746)

print(f[N])
