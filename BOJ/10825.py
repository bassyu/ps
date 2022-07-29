import sys

input()
l = []
for line in sys.stdin:
    name, kor, eng, math = line.split()
    l.append((-int(kor), int(eng), -int(math), name))

for _, _, _, name in sorted(l):
    print(name)