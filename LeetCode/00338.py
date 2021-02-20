class Solution:
    def countBits(self, num: int) -> List[int]:
        output = []
        for n in range(num + 1):
            output.append(len([c for c in bin(n) if c == '1']))
        return output
