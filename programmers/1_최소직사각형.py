def solution(sizes):
    height, width = [], []
    for a, b in map(sorted, sizes):
        height.append(a)
        width.append(b)
        
    return max(height) * max(width)
