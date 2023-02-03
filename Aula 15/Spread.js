/* Spread --> Operador que divide o nosso Array e devolve eles separadamente  */

const notas = [100,200,300]

function somar(nota1,nota2,nota3){
    return nota1 + nota2 + nota3
}

console.log(somar(...notas)) // Ele trasforma os valores do array em 3 valores e assim a função recebe 3 paramentros 


const produtos = [
    {
        id:'001',
        desc:['mouse','25,00']
    },
    {
        id:'002',
        desc:['teclado','50,00']
    },
    {
        id:'003',
        desc:['monitor','250,00']
    }
]

const p = [...produtos]

console.log(p)


const n1 = [100,200,300]
const n2 = [400,500,600]
const n3 = [700,800,900]
const n4 = [...n1,...n2,...n3]

console.log(n4)