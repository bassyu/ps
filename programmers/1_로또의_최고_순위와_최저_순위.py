def solution(lottos, win_nums):
    w, zero, correct = set(win_nums), 0, 0
    for i in lottos:
        if i == 0: zero += 1
        if i in w: correct += 1
            
    return [7-i if i else 6 for i in [correct+zero, correct]]
