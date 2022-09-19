L, C = map(int, input().split())
cs = sorted(input().split())

answers = []
def dfs(s, i, vowel, consonant):
    if len(s) + (C-i-1) < L:
        return
        
    if s[-1] in 'aeiou':
        vowel += 1
    else:
        consonant += 1
    
    if len(s) >= L:
        if vowel >= 1 and consonant >= 2:
            answers.append(s)
        return
    
    for j in range(i+1, C):
        dfs(s + cs[j], j, vowel, consonant)

for i in range(C-L+1):
    dfs(cs[i], i, 0, 0)

print('\n'.join(answers))