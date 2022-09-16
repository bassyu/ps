import collections
A, B, C = map(int, input().split())
ABC = (A, B, C)

memo = set()
answers = set()
q = collections.deque([(0,0,C)])
def append(after, i):
    abc = after[i:] + after[:i]
    if abc not in memo:
        memo.add(abc)
        q.appendleft(abc)

while q:
    a, b, c = q.pop()
    if a == 0 and c not in answers:
        answers.add(c)
    
    abc = (a, b, c)
    for i in range(3):
        X, Y, Z = ABC[i:] + ABC[:i]
        x, y, z = abc[i:] + abc[:i]
        i = 3-i
        give = Y-y
        if x >= give:
            append((x-give, y+give, z), i)
        else:
            append((0, y+x, z), i)
    
        give = Z-z
        if x >= give:
            append((x-give, y, z+give), i)
        else:
            append((0, y, z+x), i)

print(*sorted(answers))