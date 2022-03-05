def solution(n, build_frame):
    l = [[[0, 0] for _ in range(n+1)] for _ in range(n+1)]
    added = set()
    for x, y, pillar, add in build_frame:
        item = (x, y, pillar)
        if add:
            added.add(item)
            l[y][x][pillar] = 1
            if not able(l):
                added.remove(item)
                l[y][x][pillar] = 0
        else:
            added.remove(item)
            l[y][x][pillar] = 0
            if not able(l):
                added.add(item)
                l[y][x][pillar] = 1
    
    for i in [2,1,0]:
        added = sorted(added, key=lambda x: x[i])
        
    return [*map(list, added)]

def able(l):
    for y in range(len(l)):
        for x in range(len(l)):
            if l[y][x][0] and not (y==0 or l[y-1][x][0] or l[y][x-1][1] or l[y][x][1]):
                return False
            if l[y][x][1] and not (l[y-1][x][0] or l[y-1][x+1][0] or (x-1>=0 and l[y][x-1][1] and l[y][x+1][1])):
                return False
    return True
