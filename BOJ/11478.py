S = input()
answer = set()
for length in range(len(S)):
    for start in range(len(S)-length):
        answer.add(S[start:start+length+1])

print(len(answer))