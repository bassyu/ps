def solution(s):
    count = 0
    for i in range(len(s)):
        stack, correct = [], True
        for c in s[i:] + s[:i]:
            if c in '({[':
                stack.append({'(': ')', '{': '}', '[': ']'}[c])
            elif not stack or stack.pop() != c:
                correct = False
                break
                
        if stack: correct = False
        count += correct
        
    return count
