import sys

input()
l = []
for line in sys.stdin:
    name, kor, eng, math = line.split()
    l.append((name, int(kor), int(eng), int(math)))

for name, _, _, _ in sorted(l, key=lambda x: (-x[1], x[2], -x[3], x[0])):
    print(name)