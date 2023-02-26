/* Set -> Semelhante ao map ele permite armazenar valores únicos de qualquer tipo ele é apenas um valor enquanto o map e chave e valor */

let set = new Set([1,2,3]) // Ele não insere valores duplicados

set.add(4) // Maneira que adicionamos valores no set
set.add(5)
set.add(6)
set.add(7)

for(n of set){
    console.log(n)

}

console.log(set.size)
