// O que são Funções?

/*
 Funções são extramente importantes na programação o conceito básico dela é
 a palavra reservada function, nome da sua função, lembrando que não é legal usar acentos ou 
 letras com o ç e etc... dentro dos () é a onde fica os paramentros, caso você não tenha nenhum é aceitável
 deixar vazio, nas chaves é a onde fica os comandos que serão executados quando a função
 for chamada.
*/


// Exemplo 01 - Funções comuns

function texto(){ // Essa função irá apenas retornar o texto
    console.log("Isso é uma função")
}


texto() // É importante lembrar que a função só será executada quando ela for chamada desse jeito aqui


// Exemplo 02 - Funções com parâmetros

function soma(n1,n2){
    var res = n1 + n2
    console.log(res)
}

soma(5,2) // Aqui estamos passando dois parâmetros para as vars n1 e n2


// Os parâmetros são váriaveis que são passadas entre os () da função 

// Exemplo 03 - Retornando valores 

function soma2(n1,n2){
    return n1+n2 // Estamos pedindo para o return somar o n1 + n2

    // Return

    /* A declaração return finaliza a execução de uma função e 
       especifica os valores que devem ser retonados para onde a função foi chamada.*/
}
var res = soma2(5,5) // Podemos adicionar a função dentro de uma váriavel 
console.log(res)


// Exemplo 04 - Utilizando Array

var numeros = [10,2,5,30,25,19,50,100] 
function media(nums){
    var tam = nums.length;
    var soma = 0
    for(var i = 0; i < tam; i++){ // Será somado e divido pelo numero de elementos que é 8
        soma+=nums[i]
    }
    return Math.round(soma/tam)

}

console.log(media(numeros))


// Nesse exemplo a cima estamos criando uma função que retorna a media do nosso array números

/*
    A function media recebe os vars tam e soma, tam vai receber o paramentro.length, que serve para retornar o tamanho do array
    com o for vamos criar a rotina de análise que faz a seguinte repetição, se o indice for menor que o tamanho do nosso array, ele séra incrementado
    a baixo estamos atribuindo soma a nums e o valor do indice, com o return e a função math.round vamos arredondar o valor quando ele for retornado. No console.log
    passamos a chamada da função e o paramentro que será testado

*/