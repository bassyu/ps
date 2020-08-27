T = int(input())
if T % 10:
    print(-1)
else:
    print(T//350, T % 350//60, T % 350 % 60//10)
