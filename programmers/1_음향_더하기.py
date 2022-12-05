def solution(absolutes, signs):
    return sum(i if s else -i for i, s in zip(absolutes, signs))
