import math

def solution(n, k):
    k_base, position = 0, 1
    while n:
        k_base += n % k * position
        position *= 10
        n //= k
        
    return sum([is_prime(int(i)) for i in str(k_base).split('0')])    
    
def is_prime(n):
    if n==1: 
        return False
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True
