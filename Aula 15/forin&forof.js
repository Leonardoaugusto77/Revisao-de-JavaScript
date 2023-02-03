/* O for in é responsável por percorrer pelas propriedades enumeradas de um objeto com base na inserção, enquanto o for of
percorre pelos valores do objeto que sejam iterativos como por exemplo um array, map e set
*/

const aluno = {nome: 'Leonardo', sobrenome: 'Augusto'} 
const notas = {n1: 80, n2:75, n3:92, n4:85}
const info = {...aluno,...notas}

for(let dados in info){ /* Ele irá percorrer o aluno e adiconar as propriedades do objeto na variavel dado */
    console.log(info[dados])
}

let notass = [100,60,70,40,30,90,65]

for(let n of notass){ /* Percorrendo coleções */
    console.log(n)
}
