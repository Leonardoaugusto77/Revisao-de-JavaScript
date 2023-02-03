function soma(...num){ // num é o rest
    let res = 0
    let qted = num.length
    for(let i = 0; i < qted; qted++){
        res+=num[i]
    }
    return res
}

console.log(soma(3,2))