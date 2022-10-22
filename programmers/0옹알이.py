def solution(babbling):
    answer = len(babbling)
    for s in babbling:
        able = ['aya', 'ye', 'woo', 'ma']
        i = 0
        pre = ''
        while i < len(s):
            a, b = s[i:i+3], s[i:i+2]
            if a != pre and a in able:
                i += 3
                pre = a
                
            elif b != pre and b in able:
                i += 2
                pre = b
                
            else:
                answer -= 1
                break
    
    return answer