from collections import deque

def solution(places):
    return [bfs(place) for place in places]
    
def bfs(place):
    r = range(5)
    starts = []
    for y in r:
        for x in r:
            if place[y][x]=='P':
                starts.append((y, x))
                
    for y_start, x_start in starts:
        visited = [[0 for _ in r]for _ in r]
        visited[y_start][x_start] = 1
        q = deque([(y_start, x_start)])
        while q:
            Y, X = q.pop()
            for y, x in [(Y,X+1),(Y,X-1),(Y-1,X),(Y+1,X)]:
                if y in r and x in r and place[y][x]!='X' and visited[y][x]==0:
                    q.appendleft((y, x))
                    visited[y][x] = visited[Y][X] + 1
                    if place[y][x]=='P' and visited[Y][X]<=2:
                        return 0
    return 1
