def solution(n, s, a, b, fares):
    R = range(n+1)
    g = [[float('inf') for _ in R] for _ in R]
    for i in R:
        g[i][i] = 0
    for i, j, fare in fares:
        g[i][j] = g[j][i] = fare
    
    for k in R:
        for i in R:
            for j in R:
                g[i][j] = min(g[i][j], g[i][k]+g[k][j])
    
    answer = float('inf')
    for i in R:
        answer = min(answer, g[s][i]+g[i][a]+g[i][b])
        
    return answer