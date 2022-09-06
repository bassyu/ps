N = int(input())
W = [[int(i) for i in input().split()] for _ in range(N)]

def dfs(i, history=[], cost=0):
    history += [i]
    for j in range(N):
        if not W[i][j]: 
            continue
        new_cost = cost + W[i][j]
        if len(history) == N and j == start:
            global answer
            answer = min(answer, new_cost)
        elif j not in history and new_cost < answer:
            dfs(j, history, new_cost)

    history.pop()

answer = float('inf')
for start in range(N):
    dfs(start)

print(answer)