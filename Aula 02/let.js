/* Criando Vars com Let
    let é mais utilizado para criar variáveis com o escopo
    em condições como if, while, for e etc...
*/

var num = 10

if(num==10){
    let num=5 // <-- No momento que usamos let declaramos que a Var num tem o escopo limitado ao bloco que ela se encontra
    console.log(num) // <-- O resultado será 5
}

console.log(num) // <-- esse num está puxando a Var num que está fora do escopo do if então o resultado será 10


/* Lembrando que não tem problema em utilizar Let para declarar variáveis globais, porém como uma boa prática de Clean Code é interessante 
    padronizar o código para facilitar a leitura de futuros programadores. */


// Exemplo de Var Global usando Let

let teste = "Variável Global utilizando Let"

console.log(teste)