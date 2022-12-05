from collections import defaultdict

def solution(id_list, report, k):
    id_map = {id: i for i, id in enumerate(id_list)}
    reported = defaultdict(set)
    for r in report:
        a, b = r.split()
        reported[b].add(a)
    
    ban = set()
    for key, value in reported.items():
        if len(value) >= k:
            ban.add(key)
            
    answer = [set() for _ in range(len(id_list))]
    for r in report:
        a, b = r.split()
        if b in ban:
            answer[id_map[a]].add(b)
            
    return [len(s) for s in answer]
