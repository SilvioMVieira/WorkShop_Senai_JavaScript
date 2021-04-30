var val1 = Number(prompt("Digite um número"))
var val2 = Number(prompt("Digite um número"))
var resultado = null

function calcular(){
var sinal = Number(prompt("Informe o tipo de calculo: \n 1 - somar \n 2 - subtrair"))
if (sinal == 1) {
    resultado = val1 + val2
}
if (sinal == 2) {
    resultado = val1 - val2
}
return resultado
}
calcular()
console.log("O resultado da operação é: " + resultado)