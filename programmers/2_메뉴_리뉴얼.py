import collections, itertools

def solution(orders, course):
    answer = []
    for course_size in course:
        combi_count = collections.defaultdict(int)
        for order in orders:
            for combi in itertools.combinations(order, course_size):
                combi_count[tuple(sorted(combi))] += set(combi) <= set(order)

        for combi, count in combi_count.items():
            if count >= 2 and count == max(combi_count.values()):
                answer.append(''.join(combi))
            
    return sorted(answer)
