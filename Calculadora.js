var contador=null
do{
var val1 = Number(prompt("Digite um número \n 0   1   2\n 3   4   5\n 6   7   8\n      9"))
contador = contador + val1
var sinal = prompt("Informe o tipo de calculo: \n + \n - ")
contador = contador + sinal
}while(sinal != "=")
contador

