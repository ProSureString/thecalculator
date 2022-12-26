out = 0
num1 = game.ask_for_number("num1")
num2 = game.ask_for_number("num2")
opertor = game.ask_for_string("The operator asmd")
if opertor == "A" or opertor == "a":
    out = num1 + num2
elif opertor == "S" or opertor == "s":
    out = num1 - num2
elif opertor == "M" or opertor == "m":
    out = num1 * num2
elif opertor == "D" or opertor == "d":
    out = num1 / num2
game.splash(out)