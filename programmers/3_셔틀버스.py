def solution(n, t, m, timetable):
    crews = sorted([int(t[:2])*60 + int(t[3:]) for t in timetable], reverse=True)
    groups = []
    for arrival in [540 + i*t for i in range(n)]:
        group = [arrival]
        while crews and crews[-1] <= arrival and len(group) <= m:
            group.append(crews.pop())
            
        groups.append(group)
        
    last = groups[-1]
    if len(last) <= m:
        con = max(last)
    else:
        last.sort()
        con = max(last[:-1]) - 1
    
    return "%02d:%02d" % (con//60, con%60)
