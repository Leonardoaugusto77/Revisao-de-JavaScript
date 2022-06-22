// Incremento e Decremento de variáveis

var num = 10

num = num + 1 // Incremento Simples
// num=num-1 Decremento Simples

/* A melhor maneira de fazer esse tipo incremento e utilizando num++ ou para subtrair --
    num++ <-- Para adiconar 1
    num-- <-- Para subtrair 1
    num+=  <-- Somar 2 
    num-=  <-- Subtrair 2

    Pos Incremento <-- Adiciona no final
    Pre Incremento <-- Adiciona no inicio, utilizado em casos que o Pos não é lido de imediato
*/

console.log(num)


var nums = 10
var x

x=nums++

console.log(x)

/* 
    Embora incrementemos o valor de num e passamos para a variável x, ao imprimir não
    será retornado o valor 11 e sim o valor 10. Isso pq no pós incremento o valor é adicionado á variável depois.
    
    Nesse caso a cima primeiro e adicionado o valor de num a x e só depois num tem o valor incrementado!
    Para retornarmos o 11 será necessário incrementar primeiro e depois passar a Var desse jeito.
   
    x=++num
*/


  