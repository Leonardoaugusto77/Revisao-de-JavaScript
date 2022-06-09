// O que são Escopo de váriaveis?

/*


O Escopo serve para limitar até onde uma váriavel pode ser usada, já vimos nas
primeiras aulas que temos o VAR, LET e CONST cada uma tem uma diferença minima mas
em si servem para armazenar VARS





*/

function cor(){
    var nomeCor =  "Azul" // No momento que declaramos um var dentro do bloco de comando, ficamos cientes que só podemos utilizar essa VAR dentro da função
    console.log(nomeCor)
}

cor()
console.log(nomeCor) // Como a VAR está dentro da function, fazendo a chamada dela com console.log() isso irá gerar um ERRO

// Utilizando o This

var nomeCor = "Vermelho"


function cor(){
    var nomeCor =  "Azul" 
    console.log(this.nomeCor + " " +  nomeCor) // No console o valor retorna Undefined
}

cor()
for(var i=0;i<10;i++){

}

console.log(i)






/* Em casos que precisarmos se referenciar a um VAR que está no escopo global  
   O This será utilizado veja o exemplo  acima 




*/