def solution(alp, cop, problems):
    awant, cwant = 0 ,0
    for areq, creq, _, _, _ in problems:
        awant, cwant = max(awant, areq), max(cwant, creq)
        
    dp = [[float('inf')]*(cwant+2) for _ in range(awant+2)]
    alp, cop = min(alp, awant), min(cop, cwant)
    dp[alp][cop] = 0
    for a in range(alp, awant+1):
        for c in range(cop, cwant+1):
            for areq, creq, arew, crew, cost in problems:
                dp[a][c+1] = min(dp[a][c+1], dp[a][c]+1)
                dp[a+1][c] = min(dp[a+1][c], dp[a][c]+1)
                if a >= areq and c >= creq:
                    aup, cup = min(awant, a+arew), min(cwant, c+crew)
                    dp[aup][cup] = min(dp[aup][cup], dp[a][c]+cost)
                    
    return dp[awant][cwant]