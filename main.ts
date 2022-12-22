let out = 0
let opertor = ""
let num2 = 0
let num1 = 0
let starting = true
while (starting) {
    starting = false
    num1 = game.askForNumber("num1")
    num2 = game.askForNumber("num2")
    opertor = game.askForString("The operator a+ s- m* d/")
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
    starting = true
}
