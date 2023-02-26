/* Filter -> Filtra um novo array e devolve um novo array que passaram pela filtragem */

let num = [1,2,3,4,5,6,7,8,10]

let novoA = num.filter((e) => {
    return e < 5
})

console.log(num)
console.log(novoA)


let dados = [
    {
        id: 15
    } ,
    {
        id: 0
    } ,
    {
        id: -10
    } ,
    {
        id: null
    } ,
    {
        id: NaN
    } ,
    {
        id: undefined
    } ,
    {
        id: ''
    } ,
]

dados.filter((e) => {
    if(typeof(e.id) == 'number' && (e.id >= 0 )){
        return true
    } else {
        return false
    }
})

console.log(dados)