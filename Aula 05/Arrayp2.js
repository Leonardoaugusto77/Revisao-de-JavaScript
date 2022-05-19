// Utilizando



// Unshift <-- Adicona um ou mais elementos no ínico de um array e retorna o número de elementos 

var mochila = [] 

mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.unshift("Pedra") // <-- Atráves do console.log podemos ver por conta do Unshift a Pedra passa a ficar no indice[0] do nosso Array 

// Pop <-- Remove o último elemento de um array e retorna aquele elemento

mochila.pop() // <-- Vai remover a laterna do nosso Array

// Shift <-- Remove o primeiro elemento de um Array

mochila.shift() // <-- Vai remover a Pedra da mochila já que deixamos ela por primeiro com o Unshift


// Splice <-- Remove o contéudo de uma lista e possível remover mais de um item 

//mochila.splice(3) // <-- Nessa caso a Pederneira será removida

mochila.splice(3,1) // A partir do indice 3 eu vou remover 1 item

console.log(mochila)