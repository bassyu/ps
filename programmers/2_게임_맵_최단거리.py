from collections import deque

def solution(maps):
    n, m, success = len(maps), len(maps[0]), False
    q = deque([(0, 0)])
    while q:
        Y, X = q.pop()
        for y, x in [(Y,X+1), (Y,X-1), (Y-1,X), (Y+1,X)]:
            if y in range(n) and x in range(m) and maps[y][x]==1:
                q.appendleft((y, x))
                maps[y][x] = maps[Y][X] + 1
                
    return maps[-1][-1] if maps[-1][-1] != 1 else -1
