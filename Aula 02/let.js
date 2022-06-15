/* Criando Vars com Let
    let é mais utilizado para criar variaveis com o escopo
    dentro de condições como if, while, for e etc... 
*/

var num = 10

if(num==10){
    let num=5 // <-- No momento que usamos let declaramos que a var num tem o escopo limitado ao bloco que ela se encontra
    console.log(num) // <-- O resultado será 5
}

console.log(num) // <-- esse num está puxando a Var num que está fora do escopo do if então o resultado será 10