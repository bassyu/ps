from collections import deque

N = int(input())
R = range(N)
land = [[int(i) * -1 for i in input().split()] for _ in R]

def neighbors(Y, X):
    return [(y,x) for y,x in [(Y,X+1), (Y,X-1), (Y-1,X), (Y+1,X)] if y in R and x in R]

label = 0
for Y in R:
    for X in R:
        if land[Y][X] != -1:
            continue
        label += 1
        land[Y][X] = label
        q = deque([(Y,X)])
        while q:
            cy, cx = q.pop()
            for y, x in neighbors(cy, cx):
                if land[y][x] == -1:
                    land[y][x] = label
                    q.appendleft((y,x))

answer = float('inf')
for Y in R:
    for X in R:
        label = 0
        for y, x in neighbors(Y, X):
            if land[y][x] != 0:
                label = land[y][x]

        if land[Y][X] != 0 or label == 0:
            continue

        q = deque([(Y,X,1)])
        visited = {(Y,X)}
        out = False
        while q and not out:
            cy, cx, length = q.pop()
            for y, x in neighbors(cy, cx):
                if land[y][x] != 0 and land[y][x] != label:
                    out = True
                    answer = min(answer, length)

                if land[y][x] == 0 and not (y,x) in visited:
                    visited.add((y,x))
                    q.appendleft((y,x,length+1))

print(answer)