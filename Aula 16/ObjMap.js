/* Objeto map -> É uma coleção simples de par (key, value) podemos usar tipo primitivos os objetos */

let produtos = new Map([
    ['01', 'mouse'],
    ['02', 'teclado'],
    ['03', 'Headseat'],
    ['04', 'Monitor'],
])


// console.log(produtos.size) // Me devolve o tamanho do map

// produtos.clear // Limpa dos os itens que estão no map
// produtos.delete('03') // Deleta o item que foi passado de dentro do map

// forEach() -> Permite executar uma função que é passada como callback para cada um dos elementos do nosso map

// Retorna um objeto do tipo interator que redefinir a chave do map

console.log(produtos.has('02')) // Procura o elemento na lista 

let it = produtos.keys() // valor da chave
let itv = produtos.values() // valor do value

console.log(it.next())
console.log(itv.next().value)

const info = (chave, valor) => {
    console.log('Chave ' + chave + ' - Valor ' + valor)
}

produtos.forEach(info)



/* console.log(produtos.get('02')) para definir elementos usamos o set e para pegar os elementos o get*/


for(p of produtos){
    console.log(p[1][1])
}


