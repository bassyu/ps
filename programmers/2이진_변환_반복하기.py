def solution(s):
    count = 0
    delete = 0
    while s != '1':
        count += 1 
        after = s.count('1')        
        delete += len(s) - after
        s = bin(after)[2:]
        
    return [count, delete]
