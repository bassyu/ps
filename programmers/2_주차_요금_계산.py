import math

def solution(fees, records):
    default, default_cost, unit, unit_cost = fees
    parking = {}
    for record in records:
        time, number, do = record.split()
        time = int(time[:2])*60 + int(time[3:])
        
        if not number in parking:
            parking[number] = [-1, 0]
        if do=='IN':
            parking[number][0] = time
        else:
            parking[number][1] += time - parking[number][0]
            parking[number][0] = -1
            
    answer = []
    for number in sorted(parking.keys()):
        if parking[number][0] != -1:
            parking[number][1] += 1439 - parking[number][0]
        
        p = parking[number]
        c = default_cost
        if p[1] > default:
            c += math.ceil((p[1] - default) / unit) * unit_cost
            
        answer.append(c)
        
    return answer
