import sys
sys.setrecursionlimit(10**6)

def solution(nodeinfo):
    nodes = [(i+1, x, y) for i, (x, y) in enumerate(nodeinfo)]
    return traversal(nodes, [], [])

def traversal(nodes, pre, post):
    parent, x, y = sorted(nodes, key=lambda x: x[2])[-1]
    left = [node for node in nodes if node[1] < x]
    right = [node for node in nodes if node[1] > x]
    pre.append(parent)
    for nodes in [left, right]:
        if nodes: 
            pre, post = traversal(nodes, pre, post)
    post.append(parent)
    return pre, post
