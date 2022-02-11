def solution(lines):
    times = list(map(get_time, lines))
    m = 0
    for start, end in times:
        m = max(m, get_count(times, start, start+1000), get_count(times, end, end+1000))

    return m
    
def get_time(line):
    day, end, take = line.split()
    end = (int(end[:2])*3600 + int(end[3:5])*60 + float(end[6:])) * 1000
    start = end - float(take[:-1])*1000 + 1
    return start, end

def get_count(times, left, right):
    count = 0
    for start, end in times:
        if start < right and left <= end:
            count += 1
    return count
