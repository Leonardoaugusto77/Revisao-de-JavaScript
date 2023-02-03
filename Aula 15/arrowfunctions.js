/* Arrow functions -> são funções anonimas no JavaScript no qual a sintaxe é ()=> */

/* 
const soma = (parâmentros) => {
    Expressão
} 

*/

const somar = (...num) => {
   let r = 0
   for(n of num)
    r+=n
    return r
}

console.log(somar(2,2,4,5))