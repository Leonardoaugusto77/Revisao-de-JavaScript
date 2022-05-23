/* O que são Arrays?
Array é um objeto global usado na construção de algo como listas, também pode ser usado para armazenar Variáveis 
Nessa primeira aula vamos ver o metodo push. 

Metodo push -- Adiciona um ou mais elementos ao final de um Array
ou seja toda vez que o push for executado será adicionado um novo elemento no final da nossa "Lista" vamos ver um exemplo

*/



var array = [1,2,3,4] // <-- Lembrando que esse array é um vetor(ou seja um array unidimensional) e só pode ser controlado por um indice
                      // Preste atenção que o nosso array tem 4 posições
array.push(5) // Como eu expliquei a cima o push vai adicionar o número 5 no final do Array

console.log(array) // Chamando o Array



// Outro Exemplo

// var cor = new Array() <--- Podemos usar essa sintaxe para criar o Nosso Array
var cor = new Array()


cor.push("Preto")
cor.push("Azul")
cor.push("Vermelho")
cor.push("Rosa")


console.log(cor[0])


// Certo é como eu faço para buscar apenas uma cor?

// O Array trabalha com indice ou seja podemos usar cada indice que é criado automaticamente, lembrando que a primeira posição é igual a zero
// ou seja se você digitar console.log(cor[1]) o código vai retornar o Azul



/*Existem outras maneiras de adicionar elementos dentro de um array outro exemplo é quando adicionamos direto nas [] <- */
             
        //    0         1        2         3                 4          
var itens = ["Faca","Laterna","Pilhas","Canivete","Kit de primeiro socorros"]
var mochila = [] // <- Podemos adicionar um array dentro de outro

mochila.push(itens[1])

console.log(mochila[0])