def solution(play_time, adv_time, logs):
    pt, at = num(play_time), num(adv_time)
    state = [0] * (pt+1)
    for log in logs:
        s, e = num(log[:8]), num(log[9:])
        state[s] += 1
        state[e] -= 1
    
    for _ in range(2):
        for t in range(1, pt):
            state[t] += state[t-1]
    
    most = (0, 0)
    for t in range(at, pt+1):
        s, e = t-at, t
        view = state[e-1] - state[s-1]
        if view > most[0]:
            most = (view, s)
    
    t = most[1]    
    return '%02d:%02d:%02d' % (t//(60*60), t%(60*60)//60, t%60)
    
def num(t):
    h, m, s = map(int, (t[0:2], t[3:5], t[6:8]))
    return h*60*60 + m*60 + s