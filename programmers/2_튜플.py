def solution(s):
    l = sorted(s[2:-2].split('},{'), key=len)
    r = []
    for s in l:
        r.append(* set(map(int, s.split(',')))-set(r))
        
    return r
