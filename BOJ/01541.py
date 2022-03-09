s = input()
n = ['(']
for c in s:
    n.append({0: c, 1: ')-('}[c=='-'])
n += [')']

for i in range(1,len(n)):
    if n[i]=='0' and n[i-1] not in map(str,range(10)):
        n[i] = ' '

print(eval(''.join(n)))
