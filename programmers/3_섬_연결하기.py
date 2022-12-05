def solution(n, costs):
    costs.sort(key=lambda x: x[2])
    s = set([costs[0][0]])
    answer = 0
    while len(s) != n:
        for cost in costs:
            a, b, weight = cost
            if a in s and b in s:
                continue
            if a in s or b in s:
                s.update([a, b])
                answer += weight
                break
        
    return answer
