N = int(input())
tree = dict()
for _ in range(N):
    node, left, right = input().split()
    tree[node] = (left, right)

orders = [''] * 3
def traversal(node):
    if node == '.': return
    left, right = tree[node]
    orders[0] += node
    traversal(left)
    orders[1] += node
    traversal(right)
    orders[2] += node

traversal('A')
print('\n'.join(orders))