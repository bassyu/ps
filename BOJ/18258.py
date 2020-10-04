import sys
import collections as c
input()
q = c.deque()
for s in sys.stdin:
    s = s.split()
    c = s[0]
    if c == 'push':
        q.appendleft(s[1])
        continue
    elif c == 'pop':
        p = q.pop()if q else-1
    elif c == 'size':
        p = len(q)
    elif c == 'empty':
        p = int(not q)
    else:
        p = {'front': q[-1], 'back': q[0]}[c]if q else-1
    print(p)
