#CS50 My solution

from cs50 import get_int

while True:
    height = get_int('Height: ')
    if height < 1 or height > 8:
        True
    else:
        for i in range(height):
            print(' '*(height-1), end='')
            print('#'*(i+1), end='')
            print('  ', end='')
            print('#'*(i+1))
#            print(' '*(height-1), '#'*(i+1), '', '#'*(i+1))
            height -= 1
        break
