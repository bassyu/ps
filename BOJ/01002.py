for _ in range(int(input())):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    r = ((x1-x2)**2 + (y1-y2)**2) ** 0.5

    if r == 0 and r1 == r2:
        print(-1)
    elif r == r1+r2 or max(r1, r2) == r + min(r1, r2):
        print(1)
    elif r > r1+r2 or max(r1, r2) > r + min(r1, r2):
        print(0)
    else:
        print(2)
