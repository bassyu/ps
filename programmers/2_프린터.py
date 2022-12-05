def solution(priorities, location):
    location_list = [i for i in range(len(priorities))]
    print_list = []
    while len(priorities) > 1:
        if priorities[0] >= max(priorities[1:]):
            print_list.append(location_list[0])
            del priorities[0]
            del location_list[0]
            
        else:
            priorities = priorities[1:] + [priorities[0]]
            location_list = location_list[1:] + [location_list[0]]
        
    print_list.append(location_list[0])
    return print_list.index(location) + 1
