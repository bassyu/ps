class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        r = range(numCourses)
        graph = [[] for _ in r]
        state = [0 for _ in r]
        for a, b in prerequisites:
            graph[a].append(b)
        
        def dfs(course: int) -> bool:
            if state[course] == -1:
                return False
            if state[course] == 1:
                return True
            state[course] = -1
            for prior_course in graph[course]:
                if not dfs(prior_course): 
                    return False
            state[course] = 1
            return True
        
        for course in r:
            if not dfs(course): 
                return False
        return True
