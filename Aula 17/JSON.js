/* JSON ->  */


let colabJSON = ' { "colaboradores" : [' +
    ' {"nome" : "Leonardo Augusto", "salario":"1800", "idade:22"}' +
']}'

const c_obj = JSON.parse(colabJSON) // É quando eu tenho o JSON e quero converter em um texto e stringify e quando eu quero converter em JSON
console.log(c_obj.nome[0])