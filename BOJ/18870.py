input()
X=[*map(int,input().split())]
s=sorted(set(X))
d={s[i]:i for i in range(len(s))}
print(*[d[i]for i in X])
