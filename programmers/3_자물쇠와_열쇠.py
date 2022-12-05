from copy import deepcopy

def solution(key, lock):
    keys = get_keys(key)
    for key in keys:
        for up in range(1, len(key) + len(lock)):
            for left in range(1, len(key) + len(lock)):
                union = get_union(key, lock, up, left)
                if is_fit(union):
                    return True
    return False

def get_keys(key):
    r = range(len(key))
    keys = [key]
    for _ in range(3):
        new = [[keys[-1][y][x] for y in r[::-1]] for x in r]
        keys.append(new)
        
    return keys

def get_union(key, lock, up, left):
    k, l = len(key), len(lock)
    length = k*2 + l
    union = [[0 for _ in range(length)] for _ in range(length)]
    mid_range = range(k, k + l)
    for y in mid_range:
        for x in mid_range:
            union[y][x] = lock[y-k][x-k]

    for y in range(up, up + k):
        for x in range(left, left + k):
            union[y][x] += key[y-up][x-left]
            
    middle_union = [[union[y][x] for x in mid_range] for y in mid_range]
    return middle_union

def is_fit(union):
    r = range(len(union))
    for y in r:
        for x in r:
            if union[y][x] != 1:
                return False
    return True
