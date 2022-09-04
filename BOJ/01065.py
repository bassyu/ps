count  = int()
for i in range(1, int(input())+1):
    l = [int(c) for c in str(i)]
    if len(l) < 3 or l[0]+l[2] == l[1]*2:
        count += 1

print(count)
