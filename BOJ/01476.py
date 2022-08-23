E,S,M = map(int, input().split())
for i in range(1, 15*28*19+1):
    if i%15==E%15 and i%28==S%28 and i%19==M%19:
        print(i)