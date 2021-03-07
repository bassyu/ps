"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node: return node
        clone = {node: Node(val=node.val)}
        stack = [node]
        while stack:
            pop_node = stack.pop()
            for neighbor_node in pop_node.neighbors:
                if neighbor_node not in clone:
                    clone[neighbor_node] = Node(val=neighbor_node.val)
                    stack.append(neighbor_node)
                    
                clone[pop_node].neighbors.append(clone[neighbor_node])
                
        return clone[node]
