/* Parâmetros REST -> utilizado para permitir que uma função receba um número indefinido de parâmetros  */

function soma(...num){ // num é o rest
    let res = 0
    let qted = num.length
    for(let i = 0; i < qted; i++){
        res+=num[i]
    }
    return res
}

console.log(soma(3,2,5,5))

const par = num => {
    if(num% 2 == 0){
        return true
    } else{
        return false
    }
}

console.log(par(2) ? 'É par' : 'Não é par')