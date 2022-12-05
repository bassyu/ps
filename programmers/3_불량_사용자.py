import re, itertools

def solution(user_id, banned_id):
    size = len(banned_id)
    permutations = itertools.permutations(user_id, size)
    patterns = [re.compile(i.replace('*', '.')) for i in banned_id]
    
    s = set()
    for permutation in permutations:
        l = [permutation[i] for i in range(size) if patterns[i].fullmatch(permutation[i])]
        if len(l) == size: 
            s.add(tuple(sorted(l)))
    
    return len(s)
