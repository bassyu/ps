N = int(input())
for i in map(abs, range(1-N, N)):
    print(i*' '+(N-i)*'*')
