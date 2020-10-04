import itertools as i
for c in i.combinations([int(input())for _ in ' '*9], 7):
    if sum(c) == 100:
        break
for i in sorted(c):
    print(i)
