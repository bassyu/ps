from itertools import combinations

def solution(relation):
    len_relation = len(relation)
    len_column = len(relation[0])
    column_numbers = [i for i in range(len_column)]
    
    keys = list() # 모든키 
    for i in range(1, len_column+1):
        keys.extend(combinations(column_numbers, i))
    
    uniqueness = list()
    for key in keys:
        relation_key = list()
        for row in relation: 
            relation_key.append(tuple([row[column] for column in key]))
        
        if len(set(relation_key)) == len_relation:
            uniqueness.append(set(key))
            
    candidate = list()
    while uniqueness:
        candidate.append(uniqueness.pop())
        for key in uniqueness:
            if candidate[-1] >= key:
                candidate.pop()
                break
        
    return len(candidate)