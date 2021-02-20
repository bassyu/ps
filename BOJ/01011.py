for _ in range(int(input())):
    x, y = map(int, input().split())
    if y-x == 1:
        print(1)
        continue

    d, u, c = 1+1, 2, 0
    while d < (y-x):
        c += 1
        d += u
        if c%2 == 0:
            u += 1
    
    print(2+c)
