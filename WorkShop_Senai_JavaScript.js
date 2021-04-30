var val1 = Number(prompt("Digite um número"))
var sinal = prompt("Informe o tipo de calculo: \n + \n - ")
var val2 = Number(prompt("Digite outro número"))
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
console.log("O resultado da operação é: " + resultado)