from collections import deque
q=deque(range(int(input()))[::-1])
while len(q)!=1:
    q.pop()
    q.appendleft(q.pop())

print(q[0]+1)
