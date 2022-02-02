def solution(stones, k):
    left, right = 1, 2000000001
    while left <= right:
        mid = (left + right) // 2
        distance = 1
        for stone in stones:
            if stone - mid > 0:
                distance = 1
            else:
                distance += 1
            if distance > k:
                break
        if distance > k:
            right = mid - 1
            result = mid
        else:
            left = mid + 1
    return result
