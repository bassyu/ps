N, r, c = input().split()
print(sum([int(bin(int(i))[2:], 4)for i in [r, r, c]]))
