/*3)Faça um programa que, com base no preço de três produtos, 
informe qual produto você deve comprar, sabendo que a decisão 
é sempre pelo mais barato.
*/

var precoArroz=9
var precoCarne=8
var precoCacau=5

var maisBarato=precoArroz

if(maisBarato>precoCarne){ 

    maisBarato=precoCarne
}
else if(maisBarato>precoCacau){

    maisBarato=precoCacau

    console.log ("O produto mais barato é: "+ maisBarato)

}
else {
    console.log("O produto mais barato é: "+ maisBarato) 
}
