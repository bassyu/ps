def solution(n, k, cmd):
    nodes = {i: [i-1, i+1] for i in range(n)}
    delete = []
    for c in cmd:
        if c=='C':
            link = nodes[k]
            delete.append((k, link))
            if link[0] in nodes: nodes[link[0]][1] = link[1]
            if link[1] in nodes: nodes[link[1]][0] = link[0]
            del nodes[k]
            k = link[1] if link[1] in nodes else link[0]
            
        elif c=='Z':
            node, link = delete.pop()
            nodes[node] = link
            if link[0] in nodes: nodes[link[0]][1] = node
            if link[1] in nodes: nodes[link[1]][0] = node
                
        else:
            direction, count = c.split()
            for _ in range(int(count)):
                k = nodes[k][0 if direction=='U' else 1]
        
    return ''.join(['O'if i in nodes else'X' for i in range(n)])
