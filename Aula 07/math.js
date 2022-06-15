// Trabalhando com a Classe Math no JavaScript

/*  
    O que o math faz?, o objeto embutido que tem propriedades e 
    métodos para constantes e funções matemáticas.

    É bastante importante lembra que math trabalha com métodos e constantes.


*/

// Constantes
var mt = Math.PI

console.log(mt)

console.log(Math.E)

// As constantes retoram valores Fixo como o valor de PI, todas as constantes são utilizadas da mesma forma 


// Método

var n1 = -10

console.log(Math.abs(n1)) // O Math.abs() retorna o número absoluto de um número

var n2 = 10.3

console.log(Math.ceil(n2)) // O Math.ceil vai aredondar o valor para cima


var n3 = 10.5

console.log(Math.round(n3)) // o Math.round() se for 10.5 ele vai aredondar o valor para 11 se for abaixo de .5 ele vai a aredondar pra baixo


var n4 = 4

console.log(Math.pow(n4,2)) // Eleva um número a outro

var n5 = 5.2

console.log(Math.floor(n5)) // Vai aredondar o valor para baixo


var n6 = Math.random() // Retorna números aleatorios entre 0 e 1 

console.log(n6)


// Podemos utilizar dois metodos ao mesmo tempo por exemplo:

var n7 = 10

var res = Math.round(Math.random() * n7)

console.log(res)



// Exemplos utilizando o FOR


var n8 = 60

for(let i = 0; i < 6; i++){
    console.log(Math.round(Math.random() * n8))
}

// Logo em breve vamos estudar a fundo angulos no JavaScript por enquanto só acompanhe a aula 

var angulo = 45

var c = Math.cos(angulo * Math.PI / 180)
var s = Math.sin(angulo * Math.PI/180)

console.log("Angulo:" + angulo + " Cosseno " + c + " Seno " + s)


var n9 = Math.max(1,2,3,4,5,6,7,8,9) // Retorna o número maximo, eo min o menor valor existente

console.log(n9)