/* 
  Bloco de comandos (BDC) {} <- tudo que estiver nas chaves vai ser considerado pelo bloco de comando, ela
  não é necessária em todos os casos, porém é interessante utilizar para uma organização melhor do código veja os exemplos abaixo.
 
*/

//Exemplo utilizando as chaves

var num = 10

if(num > 10){
    console.log("Maior que " + num)
} else {
    console.log("Menor que " + num)
}


// Sem as chaves

var num = 10

if(num > 10)
    console.log("Maior que 10" )
 
else 
    console.log("Menor que 10")

// Quando existem mais instruções é obrigatório usar chaves {}
