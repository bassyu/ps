def solution(arr):
    ret = quad(arr, len(arr), 0, 0, [0, 0])
    if ret == [0, 4]: return [0, 1]
    if ret == [4, 0]: return [1, 0]
    return ret
    
def quad(arr, size, x, y, answer):
    if size == 1:
        return [0, 1] if arr[y][x] else [1, 0]
        
    size //= 2
    f, t = 0, 0
    for x_go, y_go in [(0,0),(size,0),(0,size),(size,size)]:
        ret = quad(arr, size, x+x_go, y+y_go, answer)
        f += 1 if ret==[4, 0] else ret[0]
        t += 1 if ret==[0, 4] else ret[1]
        
    return [answer[0]+f, answer[1]+t]
