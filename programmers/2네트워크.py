from collections import deque

def solution(n, computers):
    visited, count = set(), 0
    for i in range(n):
        q = deque()
        if i not in visited:
            q.appendleft(i)
            visited.add(i)
            count += 1
            
        while q:
            i = q.pop()
            for go in [go for go in range(n) if computers[i][go]]:
                if go not in visited:
                    q.appendleft(go)
                    visited.add(go)
                    
    return count
