ternary_dict = {0: '1', 1: '2', 2: '4'}

def solution(n):
    q, r = divmod(n-1, 3)
    if q == 0:
        return ternary_dict[r]
    
    return solution(q) + ternary_dict[r]
