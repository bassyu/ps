def solution(board, moves):
    columns = [[] for _ in range(len(board[0]))]
    for row in board[::-1]:
        for i in range(len(row)):
            if row[i]:
                columns[i].append(row[i])
                
    stack = [0]
    answer = 0
    for m-1 in moves:
        if columns[m]:
            p = columns[m].pop()
            if stack[-1] == p:
                stack.pop()
                answer += 2
            else:
                stack.append(p)
                
    return answer
