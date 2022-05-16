/* O comando Switch é bem parecido com o IF, no caso do Switch sabemos quais valores vão ser retornados */

var pos

pos = 1

switch(pos){ // <-- Condição(Var) que vai ser testada
    case 1: 
        msg = "Primeiro lugar Medalha de Ouro"
        break;
    case 2:
        msg = "Segundo lugar Medalha de Prata"
        break;    
    case 3:
        msg = "Terceiro lugar Medalha de Bronze"
        break;    // <-- Cada Break serve para encerrar o fluxo do execução do case
    default: // O default é para caso a condição não atenta nenhum dos cases a cima
        msg = "Não obteve posicão"
    }
  


    console.log(msg)


/**  
 switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
} 
  
 */