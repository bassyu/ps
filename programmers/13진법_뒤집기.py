def solution(n):
    s = ''
    while n:
        s += str(n%3)
        n //= 3
    return int(s, 3)
