let out = 0
game.splash("Welcome to calculator!!!", "Please reset after each calculation...")
let num1 = game.askForNumber("num1")
let num2 = game.askForNumber("num2")
let opertor = game.askForString("The operator a+ s- m* d/")
if (opertor == "A" || opertor == "a") {
    out = num1 + num2
} else if (opertor == "S" || opertor == "s") {
    out = num1 - num2
} else if (opertor == "M" || opertor == "m") {
    out = num1 * num2
} else if (opertor == "D" || opertor == "d") {
    out = num1 / num2
}
game.splash(out)
