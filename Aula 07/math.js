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