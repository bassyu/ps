from collections import defaultdict, deque

def solution(N, road, K):
    times = [float('inf')for _ in range(N+1)]
    times[1] = 0
    graph = defaultdict(list)
    for (a, b, c) in road:
        graph[a].append((b, c))
        graph[b].append((a, c))
    
    q = deque([1])
    while q:
        p = q.pop()
        for (go, go_time) in graph[p]:
            new_time = times[p] + go_time
            if times[go] > new_time:
                times[go] = new_time
                q.appendleft(go)
    
    return len([time for time in times if time <= K])
