A, B = map(int, input().split())
m = int(input())
numA = input().split()[::-1]

num = sum([int(numA[i]) * A**i for i in range(m)])
numB = []
while num:
    numB.append(num % B)
    num //= B

print(*numB[::-1])