def solution(survey, choices):
    result = {key: 0 for key in 'RTCFJMAN'}
    for i in range(len(survey)):
        sur, cho = survey[i], choices[i]
        if cho in range(1, 4):
            result[sur[0]] += 4-cho
        elif cho in range(5, 8):
            result[sur[1]] += cho-4
        
    answer = ''
    for a, b in [('R','T'), ('C','F'), ('J','M'), ('A','N')]:
        if result[a] >= result[b]:
            answer += a
        else:
            answer += b
    
    return answer