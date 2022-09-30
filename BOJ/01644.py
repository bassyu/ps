N = int(input())

isprime = [True] * (N+1)
isprime[0] = isprime[1] = False
prime = []
for num in range(N+1):
    if isprime[num]:
        prime.append(num)
        notprime = num * 2
        while notprime <= N:
            isprime[notprime] = False
            notprime += num

count, prefix, right = 0, 0, 0
for left in range(len(prime)):
    while prefix < N and right < len(prime):
        prefix += prime[right]
        right += 1

    if prefix == N:
        count += 1
    
    prefix -= prime[left]

print(count)