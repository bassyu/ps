import itertools
def solution(expression):
    m = 0
    for p in itertools.permutations('+-*'):
        e = expression
        for r in [1,2]:
            for i in p[:r]:
                e = '(' + e.replace(i, ')'+i+'(') + ')'
        m = max(m, abs(eval(e)))
    return m
