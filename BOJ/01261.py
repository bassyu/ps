import heapq as hq

M, N = map(int, input().split())
board = [[int(i) for i in input()] for _ in range(N)]
count = [[float('inf')] * M for _ in range(N)]
count[0][0] = 0
q = [(0,0,0)]
while q:
    w, y, x = hq.heappop(q)
    for yg, xg in [(y,x+1), (y,x-1), (y-1,x), (y+1,x)]:
        if not (yg in range(N) and xg in range(M)):
            continue
        new_count = count[y][x] + board[yg][xg]
        if new_count < count[yg][xg]:
            count[yg][xg] = new_count
            hq.heappush(q, (new_count, yg, xg))

print(count[-1][-1])