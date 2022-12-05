import heapq as hq

def solution(n, paths, gates, summits):
    summits = set(summits)
    graph = [[] for _ in range(n+1)]
    for i, j, w in paths:
        graph[i].append((w, j))
        graph[j].append((w, i))
    
    intensity = [float('inf')] * (n+1)
    answer = [n+2, float('inf')]
    for gate in gates:
        q = []
        hq.heappush(q, (0, gate))
        intensity[gate] = 0
        while q:
            w, node = hq.heappop(q)
            if node in summits or w > intensity[node]:
                continue

            for go_w, go in graph[node]:
                new_intensity = max(intensity[node], go_w)
                if new_intensity < intensity[go]:
                    intensity[go] = new_intensity
                    hq.heappush(q, (go_w, go))

    for summit in summits:
        i = intensity[summit]
        if i < answer[1] or (i == answer[1] and summit < answer[0]):
            answer = [summit, i]
            
    return answer
