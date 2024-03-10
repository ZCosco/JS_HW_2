# Instructions 
# Clock shows h hours, m minutes and s seconds after midnight.

# Your task is to write a function which returns the time since midnight in milliseconds.

# Example:
# h = 0
# m = 1
# s = 1

# result = 61000

# My Submitted Solution

def past(h, m, s):
    hours = h * 60 * 60 * 1000
    minutes = m * 60 * 1000
    seconds = s * 1000
    
#     Add up milliseconds for HMS
    total_ms = hours + minutes + seconds
    
    
    return total_ms

