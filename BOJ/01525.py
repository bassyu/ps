import collections

board = []
for _ in range(3):
    board += input().split()

board = ''.join(board)
if board == '123456780':
    print(0)
    exit()

def get_nexts(s):
    i = s.index('0')
    Y, X = i//3, i%3
    nexts = []
    for y, x in [(Y,X+1), (Y,X-1), (Y-1,X), (Y+1,X)]:
        if y in range(3) and x in range(3):
            l = list(s)
            go = y*3+x
            temp = l[go]
            l[go] = l[i]
            l[i] = temp
            nexts.append(''.join(l))

    return nexts

q = collections.deque([(board, 0)])
visited = set()
while q:
    s, count = q.pop() 
    count += 1
    for next in get_nexts(s):
        if next == '123456780':
            print(count)
            exit()
        if next not in visited:
            visited.add(next)
            q.appendleft((next, count))

print(-1)