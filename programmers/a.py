point_map = [10-i for i in range(11)]

def solution(n, info):
    point, history, last = max_point(info, 0, n, 0)
    apeach = sum([point_map[i] for i in range(11) if info[i]])
    return history if apeach < point else [-1]
    
def max_point(info, i, n, point):
    if i >= 10:
        return point, [n], n
    
    use = info[i] + 1
    if n < use:
        lose, l_history, l_last = max_point(info, i+1, n, point)
        return lose, [0]+l_history, l_last*10
    
    lose, l_history, l_last = max_point(info, i+1, n, point)
    win, w_history, w_last = max_point(info, i+1, n-use, point+point_map[i]*(2 if info[i] else 1))

    if win > lose:
        return win, [use]+w_history, w_last*10+use
    elif lose > win:
        return lose, [0]+l_history, l_last*10
    else:
        return (win, [use]+w_history, w_last*10+use) if w_last > l_last else (lose, [0]+l_history, l_last*10)
