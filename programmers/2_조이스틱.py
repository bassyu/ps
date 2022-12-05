def solution(name):
    if set(name) == {'A'}:
        return 0
    
    answer = float('inf')
    for i in range(len(name) // 2): # 반 이상 움직일 필요는 없음
        left_moved = name[-i:]+name[:-i]
        right_moved = name[i:]+name[:i]
        for n in [left_moved, right_moved[0]+right_moved[:0:-1]]:
            while n and n[-1] == 'A':
                n = n[:-1]

            row_move = len(n)-1 + i
            col_move = 0
            for c in map(ord, n):
                col_move += min(c - 65, 91 - c)
            
            answer = min(answer, row_move + col_move)
            
    return answer
