/*
    async -> 
*/


/* Promise -> É um objeto que usamos para processamento assicrono, Ela tem 3 estados

  Pending -> É quando ela é criada 

  FullFilled -> Qunado ela é executada com sucesso

  Reject -> Qunado ela tem um erro


*/


const contar = (n) => {
    
    let cont = 0
    for(let i = 0; i < n; i++){
        cont++
    }

    return cont
}
const contar2 = (n) => {
    
    let cont = 0
    let t = setTimeout(()=>{
        for(let i = 0; i < n; i++){
            cont++
        }
    }, 2)
    
    return cont
}

const contar3 = (n) => {
    
    let cont = 0
    let p = new Promise((ok, erro)=>{
        for(let i = 0; i < n; i++){
            cont++
        }

        if(cont == n){
            return ok(cont)
        } else {
            erro('Erro')
        }
    }) // São passados 2 paramentros um para o resolved e outro para reject
    
    return p
}

console.log(contar(1000))
console.log(contar2(10))


contar3(10)
    .then(Sucesso => console.log('Sucesso ' + Sucesso)) // Se der ok ela irá cair aqui 
    .catch(Fracasso => console.log('Fracasso ' + Fracasso)) // Se der Reject ela cai aqui




const contadorPT = (n) => {
    let cont = 0
    let p = new Promise((ok, erro)=>{
        let t = setTimeout(()=> {

            for(let i = 0; i < n; i++){
                cont++
            }

            if(cont == n){
                ok(cont)
           } else {
               erro('Erro')
           }

        }, 2000)

    }) // São passados 2 paramentros um para o resolved e outro para reject
    
    return p
}

contadorPT(10)
        .then(ok => console.log(ok  + ' Ok'))
        .catch(erro => console.log(erro  + ' error'))










const contadorPTs  = (n) => {
            let cont = 0
            let p = new Promise((ok, erro)=>{
                let t = setTimeout(()=> {
        
                    for(let i = 0; i < n; i++){
                        cont++
                    }
        
                    if(cont == n){
                        ok(cont)
                   } else {
                       erro('Erro')
                   }
        
                }, 2000)
        
            }) // São passados 2 paramentros um para o resolved e outro para reject
            
            console.log(p)
        }

    async function contarptss(n) { // Indica a epsera de uma promisse e o await garante o retorno
        const r = await contadorPTs(n)
        console.log(r)
    }

    console.log(contadorPTs(10))