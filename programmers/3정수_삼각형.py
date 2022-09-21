def solution(triangle):
    bottom = triangle.pop()
    for row in triangle[::-1]:
        top = []
        for i in range(len(bottom)-1):
            top.append(row[i]+max(bottom[i], bottom[i+1]))
        
        bottom = top
    
    return top[0]