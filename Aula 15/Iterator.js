/* Iterator -> */

const num = [10,20,30,40,50]

let it = num[Symbol.iterator]()
console.log(it.next()) // Aqui é de forma manual
console.log(it.next()) // Aqui é de forma manual
console.log(it.next()) // Aqui é de forma manual
console.log(it.next()) // Aqui é de forma manual
console.log(it.next()) // Aqui é de forma manual


for(n of num){ // Aqui foi utilizado o iterator de maneira interna
    console.log(n)
}

