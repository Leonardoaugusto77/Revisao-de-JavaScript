/* Reduce -> Seu objetivo é retornar um 'resumo do array' seria o resultado de determinada função aplicada, semelhante ao map e filter ele
aplica função nos elementos do array

*/


let num = [0,1,2,3,4,5,6]

let soma = num.reduce((accumulator, res) =>{
    console.log(accumulator + ' - ' + res)
    return accumulator + res
})

console.log(soma)


let nomes = [
    {
    nome: 'Bruno', idade: 40
    },
    {
    nome: 'Jose', idade: 20
    },
    {
    nome: 'Pedro', idade: 14
    },
    {
    nome: 'Arthur', idade: 1
    },
    {
    nome: 'Leonardo', idade: 21
    }
]

let pessoas = nomes.reduce((p1,p2)=> {

    p1.push(p2.nome)

    return p1

},[])

let idades = nomes.reduce((p1,p2)=> {

    p1.push(p2.idade)

    return p1

},[])

console.log('Nomes ' + pessoas)
console.log('Idade ' + idades)