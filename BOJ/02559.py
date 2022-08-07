N, K = map(int, input().split())
sequence = list(map(int, input().split()))

cumulate = sequence[:1]
for i in sequence[1:]:
    cumulate.append(cumulate[-1] + i)

max_sum = cumulate[K-1]
for i in range(K, N):
    max_sum = max(max_sum, cumulate[i] - cumulate[i-K])

print(max_sum)