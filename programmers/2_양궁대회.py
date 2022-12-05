def solution(n, info):
    result = dfs(n, info, 0, 0, 0, [])
    return sorted(result, key=lambda x: (x[0], x[1][::-1]))[-1][1] if result else [-1]

def dfs(arrow, info, i, apeach, ryan, history):
    if i == 11:
        history[-1] = arrow
        if ryan > apeach:
            return [(ryan-apeach, history)]
        
        return []
    
    point = 10 - i 
    result = dfs(arrow, info, i+1, apeach+point*bool(info[i]), ryan, history+[0])
    
    for_win = info[i] + 1
    if for_win <= arrow:
        result += dfs(arrow-for_win, info, i+1, apeach, ryan+point, history+[for_win])
        
    return result