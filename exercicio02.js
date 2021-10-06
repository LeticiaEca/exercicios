var num1 = 2
var num2 = 5
var num3 = 8

var maior = num1
var menor

// MAIOR E MENOR
if( maior > num2){

    menor = num2
} 
else {
    maior = num2
    menor = num1
} 
if (maior > num3) {

    console.log("o maior número é: " + maior)
} 
else{
    console.log("o maior número é: " + num3)

}
if (menor < num3) {
    console.log ("o menor número é: " + menor)
}
else {
    console.log ("o menor número é: " + num3)
}
