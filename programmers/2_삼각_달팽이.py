def solution(n):
    l = [[0] * (i+1) for i in range(n)]
    go = {'down': (1, 0), 'right': (0, 1), 'up': (-1, -1)}
    y, x, count, state = -1, 0, 0, 'down'
    for loop in range(n)[::-1]:
        for _ in range(1 + loop):
            y, x, count = y+go[state][0], x+go[state][1], count+1
            l[y][x] = count
            
        state = {'down': 'right', 'right': 'up', 'up': 'down'}[state]
        
    return sum(l, [])
