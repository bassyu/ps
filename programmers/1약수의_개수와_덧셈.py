def solution(left, right):
    answer = 0
    for num in range(left, right+1):
        count = 0
        for i in range(1, num+1):
            count += not num % i
            
        answer += -num if count % 2 else num
        
    return answer
