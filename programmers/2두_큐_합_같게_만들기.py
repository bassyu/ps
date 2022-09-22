from collections import deque

def solution(queue1, queue2):
    q1, q2 = deque(queue1), deque(queue2)
    s1, s2 = sum(q1), sum(q2)
    count, length = 0, len(q1)
    while count < length*4:
        if s1 > s2:
            n = q1.popleft()
            q2.append(n)
            s1, s2 = s1-n, s2+n
        elif s2 > s1:
            n = q2.popleft()
            q1.append(n)
            s1, s2 = s1+n, s2-n
        else:
            return count

        count += 1
        
    return -1