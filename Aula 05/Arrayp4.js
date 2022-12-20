// Matriz <-- É um array Bidimensional, um exemplo mental interessante é de uma tabela com linhas
// Lembrando que ele possui dois indices para controle um para as linhas e outro para as colunas


var mochila = new Array() // Nosso Array Mochila será a tabela

var item1 = ["Corda",2], // O Array item vão ser as linhas
    item2 = ["Faca",1],
    item3 = ["Laterna",1],
    item4 = ["Pilhas",3]

//Para acharmos os itens dentro da nossa mochila vamos precisar saber o indice ea posição 


mochila.push(item1)    
mochila.push(item2)    
mochila.push(item3)    
mochila.push(item4)    



console.table(mochila)

console.log(mochila[0,0]) // No indice zero queremos o item da primeira coluna que tbm é representado com o 0



// Exemplo 

/*
               Coluna 0      Coluna 1    Coluna 2   Coluna 3
Linha 0   a[ 0 ][ 0 ]    a[ 0 ][ 1 ]    a[ 0 ][ 2 ]    a[ 0 ][ 3 ]
Linha 1   a[ 1 ][ 0 ]    a[ 1 ][ 1 ]    a[ 1 ][ 2 ]    a[ 1 ][ 3 ]
Linha 2   a[ 2 ][ 0 ]    a[ 2 ][ 1 ]    a[ 2 ][ 2 ]    a[ 2 ][ 3 ]
*/


var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(a[14])