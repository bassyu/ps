def solution(board, skill):
    prefix = [[0 for _ in range(len(board[0])+1)] for _ in range(len(board)+1)]
    for t, r1, c1, r2, c2, degree in skill:
        num = degree if t==2 else -degree
        prefix[r1][c1] += num
        prefix[r2+1][c2+1] += num
        prefix[r1][c2+1] -= num
        prefix[r2+1][c1] -= num
        
    for y in range(len(prefix)):
        for x in range(1, len(prefix[0])):
            prefix[y][x] += prefix[y][x-1]

    for y in range(1, len(prefix)):
        for x in range(len(prefix[0])):
            prefix[y][x] += prefix[y-1][x]
    
    answer = 0
    for y in range(len(board)):
        for x in range(len(board[0])):
            answer += int(board[y][x] + prefix[y][x] > 0)
            
    return answer