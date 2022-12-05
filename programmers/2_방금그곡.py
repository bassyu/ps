def solution(m, musicinfos):
    answers = []
    m = preprocess(m)
    m_size = len(m)
    for musicinfo in musicinfos:
        start, end, name, code = musicinfo.split(',')
        take = (int(end[:2])*60 + int(end[3:])) - (int(start[:2])*60 + int(start[3:]))
        
        code = preprocess(code)
        code = code * (take // len(code) + 1)
        code = code[:take]
        code_size = len(code)
        
        if code_size < m_size:
            continue
        for i in range(code_size):
            if code[i:i+m_size] == m:
                answers.append((name, take))
                break
            
    return sorted(answers, key=lambda x: -x[1])[0][0] if answers else '(None)'

def preprocess(s):
    for before, after in [('C#','c'),('D#','d'),('F#','f'),('G#','g'),('A#','a')]:
        s = s.replace(before, after)
    return s
