N = int(input())
edges = list(map(int, input().split()))
nodes = list(map(int, input().split()))

answer, price = 0, float('inf')
for i in range(N-1):
    price = min(price, nodes[i])
    answer += price * edges[i]

print(answer)
