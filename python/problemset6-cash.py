#CS50 My solution

from cs50 import get_float

coins = 0
coin_value = [25, 10, 5, 1]

while True:
    dollars = int(get_float('Change owned: ')*100)
    if dollars >= 0:
        break
for value in coin_value:
    coins += dollars // value
    dollars %= value
print(coins)
