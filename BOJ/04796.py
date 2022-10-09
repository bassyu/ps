i = 1
while True:
    L, P, V = map(int, input().split())
    if L == 0: break
    print('Case %d: %d' % (i, V//P * L + min(L, V%P)))
    i += 1