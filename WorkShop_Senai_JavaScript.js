var val1 = Number(prompt("Digite um número \n 0   1   2\n 3   4   5\n 6   7   8\n      9"))
var sinal = prompt("Informe o tipo de calculo: \n + \n - ")
var val2 = Number(prompt("Digite um número \n 0   1   2\n 3   4   5\n 6   7   8\n      9"))
var resultado = null

function calcular(){
if (sinal == "+") {
    resultado = val1 + val2
}
if (sinal == "-") {
    resultado = val1 - val2
}
return resultado
}
calcular()
alert(val1 + " " + " " + sinal  +  " " + val2 + " = " + resultado)

//código para as quatro operações
var val1 = Number(prompt("Digite um número \n 0   1   2\n 3   4   5\n 6   7   8\n      9"))
var sinal = prompt("Informe o tipo de calculo: \n +  -\n x  / ")
var val2 = Number(prompt("Digite um número \n 0   1   2\n 3   4   5\n 6   7   8\n      9"))
var resultado = null

function calcular(){
if (sinal == "+") {
    resultado = val1 + val2
}
if (sinal == "-") {
    resultado = val1 - val2
}
if (sinal == "x") {
    resultado = val1 * val2
}
if (sinal == "/") {
    resultado = val1 / val2
}

return resultado
}
calcular()
alert(val1 + " " + sinal  +  " " + val2 + " = " + resultado)
