// Aprendendo a utilizar indexOf,


// IndexOf <-- É responsável por procurar um elemento específico dentro no Array e retorna a sua posição

var mochila = []

mochila.push("Faca") // 0
mochila.push("Corda") // 1
mochila.push("Pederneira") // 2
mochila.push("Chave") // 3
mochila.push("Laterna") // 4
mochila.push("Pedra") // 5

let pos = mochila.indexOf("Pedra")  /* Nesse exemplo usamos o if com Array para podermos praticar usar várias ferramentas do JavaScript(ES6) */

if(pos < 0){
    console.log("Item não está na mochila!") // Caso o valor recebido for menor que 0 o console vai retornar uma mensagem e a posição do item dentro do Array já que o indexOf está sendo utilizado.
} else{
    console.log("Item está na mochila: "+pos)
}


console.log(mochila.indexOf("Laterna")) // <-- Vai retornar o valor 

// Sort <-- Ordena os elementos de um Array em ordem crescente

var num = [9,8,7,6,5,4,3,2,1]

num.sort() // <-- Primeiro organizamos
// num.reverse() // Utilizado para inverter a ordem do Array
console.log(num) // <-- Vai deixar o nosso array organizado começando do 1 ao 9

// Caso você precise deixar em ordem reversa sabe que existe esse comando que é o reverse()


// Join <-- Junta todos os elementos de um Array em uma String

var numeros

numeros=num.join()

console.log(numeros)



// Concat <-- Junta elementos de dois ou mais Array e retorna uma copia com os elementos juntos

var mochila0=[],mochila1=[],mochila2=[],mochila3=[],pos1


mochila0.push("Faca")
mochila0.push("Corda")
mochila0.push("Pederneira")
mochila0.push("Chave")
mochila0.push("Laterna")
mochila0.push("Pedra")


mochila1.push("Arrame")
mochila1.push("Luvas")
mochila1.push("Joelheira")
mochila1.push("Meias")
mochila1.push("Moedas")
mochila1.push("Canivete")

mochila2=mochila0.concat(mochila1)

console.log("A mochilha tem " + mochila2.length + " Itens!") // Length retorna o tamanho do nosso array
console.log(mochila2)




