N, r, c = input().split()
print(sum([int(f'{i:b}', 4)for i in [r, r, c]]))
