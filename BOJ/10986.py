N, M = map(int, input().split())
A = list(map(int, input().split()))

cumulate = [0]
counts = [0] * M
for a in A:
    cumulate.append(cumulate[-1] + a)
    counts[cumulate[-1] % M] += 1

combi_count = counts[0]
for count in counts:
    combi_count += count * (count-1) // 2

print(combi_count)