W, H, X, Y, P = map(int, input().split())
R = H / 2
count = 0
for _ in range(P):
    x, y = map(int, input().split())
    count += (x in range(X,X+W+1) and y in range(Y,Y+H+1)) or (X-x)**2 + (Y+R-y)**2 <= R**2 or (X+W-x)**2 + (Y+R-y)**2 <= R**2

print(count)