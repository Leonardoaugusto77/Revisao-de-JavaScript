// O que é FOR?

/*
    A Intrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e virgula


    for(p1;p2;p3++){

    }

    p1 = inicialização do contador
    p2 = condição de execução do loop
    p3 =  incremento ou decremento do contador

*/

// Exemplo simples

for(let i = 0; i < 5; i++){
    console.log("Esse é o for")
}


// Segundo exemplo usando Vars

var cont 


for(cont=0; cont < 10; cont++){
    console.log("Leonardo Augusto - Desenvolvedor Front - end")
}

// Se cont for menor do que 10 o cont vai estar incrementando até atentender os requisitos


// Exemplo com a utilização de um Array


var num = []

num.push(1)
num.push(2)
num.push(3)
num.push(4)
num.push(5)


for(let i = 0; i < 5;i++){
    console.log(num[i])
}

// Utilizando matrizes


var mochila = [
    ["Corda",1],
    ["Cura",2],
    ["Laterna",1],
    ["Pilhas", 20]
]

for(let l=0; l < 4; l++){ // Controla o indice raiz 
    for(let c = 0; c < 2; c++){ // Controla os vetores que estão dentro da Matriz
        console.log(mochila[l][c]+"")
    }
    

}
console.log(mochila[0][0])
