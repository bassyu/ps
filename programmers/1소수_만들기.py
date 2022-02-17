from itertools import combinations

def is_prime(num):
    l = [False, False] + [True] * (num - 1)
    for i in range(2, int(num ** 0.5 + 1)):
        if l[i]:
            l[i*2::i] = [False] * ((num-i)//i)
            
    return l[-1]
    

def solution(nums):
    return [is_prime(sum(l)) for l in combinations(nums, 3)].count(True)
