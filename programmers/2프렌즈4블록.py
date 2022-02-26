from copy import deepcopy
            
def solution(m, n, board):
    old = [list(s) for s in board]
    new = deepcopy(old)
    point = 0
    for Y in range(m-1):
        for X in range(n-1):
            if old[Y][X] == 'X': 
                continue
            path = [(Y,X), (Y+1,X), (Y,X+1), (Y+1,X+1)]
            if len(set([old[y][x] for y, x in path])) == 1: 
                for y, x in path:
                    if new[y][x] == 'X': 
                        continue
                    new[y][x] = 'X'
                    point += 1
    
    y = -1
    while y < m-2:
        y += 1
        x = -1
        while x < n-1:
            x += 1
            if new[y][x] != 'X' and new[y+1][x] == 'X':
                new[y+1][x] = new[y][x]
                new[y][x] = 'X'
                y = x = -1
                break
    
    return point + solution(m, n, new) if point else point
