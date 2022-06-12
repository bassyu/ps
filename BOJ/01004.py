import sys
read = sys.stdin.readline

def is_cross(x1, y1, x2, y2):
    cx, cy, r = map(int, read().split())
    in1 = ((x1-cx)**2 + (y1-cy)**2)**0.5 < r
    in2 = ((x2-cx)**2 + (y2-cy)**2)**0.5 < r
    return in1 != in2

T = int(read())
for _ in range(T):
    x1, y1, x2, y2 = map(int, read().split())
    n = int(read())
    print([is_cross(x1, y1, x2, y2) for _ in range(n)].count(True))