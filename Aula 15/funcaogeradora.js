/* Função geradora -> São funções que permite a devolução do controle para quem fez a chamada, diferente das outras funções que executam de uma vez só
essa nos permite para a execução no meio */

function* cores(){
    yield 'Vermelho' // Yield passa o controle 
    yield 'Amarelo'
    yield 'Preto'
    yield 'Branco'
    yield 'Azul'
    yield 'Rosa'
    yield 'Roxo'
}

/* A Função vai devolver um interator para quem fez a chamada */

for(let c of cores()){
    console.log(c)
}

/** Sem a utilização do for para chamarmos o proximo yield temos que usar o c.next() */

function * cont(n){
    let c=0
    while(c<n){
        yield console.log(c)
        c++
    }
}

console.log(cont(10).next())
console.log(cont(10).next())
console.log(cont(10).next())
console.log(cont(10).next())