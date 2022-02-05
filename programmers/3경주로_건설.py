import collections

def solution(board):
    r = range(len(board))
    visited = [[[float('inf')for _ in r]for _ in r]for _ in range(4)]
    for i in range(4):
        visited[i][0][0] = 0
    
    q = collections.deque([(0, 0, -1, 0)])
    while q:
        x, y, d, c = q.pop()
        for direction, (go_x, go_y) in enumerate([(x+1,y), (x-1,y), (x,y-1), (x,y+1)]):
            cost = c + (100 if d==direction or d==-1 else 600)
            if go_x in r and go_y in r and cost < visited[direction][go_y][go_x] and board[go_y][go_x]==0:
                q.appendleft((go_x, go_y, direction, cost))
                visited[direction][go_y][go_x] = cost
            
    return min([v[-1][-1] for v in visited])
