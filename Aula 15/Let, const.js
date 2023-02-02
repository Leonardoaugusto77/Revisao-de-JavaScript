/* Let e const no ES6

VAR - Utilizado para variaveis globais
LET - Utilizado para declarar variaveis no escopo de funções
CONST - Utilizada para declarar funções ( const func = () => {}) e valores que não seram alterados

*/

var num = 100
const num3 = 100

console.log(num)

const num2 = () => {
    let num = 100
    console.log(num)
}

num2()
console.log(num3)