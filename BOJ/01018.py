N, M = map(int, input().split())
W = 'WBWBWBWBBWBWBWBW'*4
B = 'BWBWBWBWWBWBWBWB'*4
l = [input() for _ in range(N)]

m = 64
for i in range(N - 7):
    for j in range(M - 7):
        t = ''.join([r[j:j+8] for r in l[i:i+8]])
        w = 0
        b = 0
        for k in range(64):
            if t[k] != W[k]:
                w += 1
            if t[k] != B[k]:
                b += 1

        m = min(m, w, b)

print(m)
