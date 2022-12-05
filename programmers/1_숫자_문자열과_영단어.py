def solution(s):
    for i, word in enumerate(['zero','one','two','three','four','five','six','seven','eight','nine']):
        s = s.replace(word, str(i))
    return int(s)
