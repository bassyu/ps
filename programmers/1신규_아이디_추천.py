import re
def solution(new_id):
    s = new_id.lower()
    s = re.sub('[^a-z0-9-_.]', '', s)
    s = re.sub('[.]+', '.',s)
    s = re.sub('^[.]|[.]$', '', s)
    s = s[:15] if s else 'a'
    s = re.sub('[.]$', '', s)
    s = (s+s[-1]*2)[:3] if len(s) <= 2 else s
    return s
