from collections import defaultdict

def solution(gems):
    left, right = 0, 0
    gems_size, kind_size, d = len(gems), len(set(gems)), defaultdict(int)
    answer = [0, gems_size + 1]
    
    while right < gems_size:
        d[gems[right]] += 1
        right += 1
        
        if len(d) == kind_size:
            while left < right:
                if d[gems[left]] > 1:
                    d[gems[left]] -= 1
                    left += 1
                elif right - left-1 < answer[1] - answer[0]:
                    answer = [left+1, right]
                    break
                else:
                    break
    
    return answer
