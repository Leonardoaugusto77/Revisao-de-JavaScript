var unica // Essa é uma variável com o Armazenamento único
var canal, nome, sites // Armazenamento de variáveis múltiplas, elas não têm o valor definido no momento
var SemValor // Se dermos um console.log() ou document.write o valor retornado dessa variável é nulo (null)
var PJH = 'Project_Heisen'
var PRO = 'Desenvolvedor Front - end Jr'

//console.log(PJH + ' ' +  PRO) // É possível fazer concatenação com as variáveis 

var n1 = 1
var n2 = 1
var txt = 'O Resultado é '

var res = txt + (n1 + n2) // Para conseguirmos concatenar Numbers e Strings será necessário utilizar () para o Navegador entender
                          // que se trata de uma soma
console.log(res)