/* Objeto map -> É uma coleção simples de par (key, value) podemos usar tipo primitivos os objetos */

let produtos = new Map()
let num = ['01','02','03','04','05']

produtos.set('01', 'Mouse')
produtos.set('02', 'Teclado')
produtos.set('03', 'Monitor')
produtos.set('04', 'Headseat')

console.log(produtos.size) // Me devolve o tamanho do map

/* Para definir elementos usamos o set e para pegar os elementos o get*/

console.log(produtos.get('02'))

