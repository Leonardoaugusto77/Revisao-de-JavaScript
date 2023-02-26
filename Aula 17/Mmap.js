/* Map -> mapea o array gera um novo com as condições e funções que passarmos para ele */


let num = [1,3,5,6,4,2,7]

let raiz = num.map(Math.sqrt)

for(r of num){
    console.log(r)
}


let dobro = num.map((n) => { // os numeros do arrau são passados atomaticamente como paramentro pro map
    return n * 2
})

console.log(dobro)

// console.log(raiz)