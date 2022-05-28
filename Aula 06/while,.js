// O oque é o comando While?

/*
    Semelhante ao comando FOR ele se trata de um comando para loops, porém é mais utilizado
    quando não sabemos quantas vezes a rotina será repetida


    Sintaxe


    p1
    while(p2){
        comandos
    p3
    }

    p1 -- Inicialização do contador
    p2 -- Condição de execução do loop
    p3 -- Incremento/Decremento do contador

*/

var num = 0

// Enquanto num for menor que 10 o looping vai printar na tela o numero 0 a 9
while(num < 10){
    console.log(num)
    num++ // Sem o incremento o código fica em looping infinito
}

// While é mais utilizado para quando não sabemos quantas repetições o código vai executar

// Mesmo exemplo acima usando o FOR

for(num=0;num < 10;num++){
    console.log(num)
}

// O FOR será mais usado quando for necessário manipular Arrays e vetores, já que na maioria das vezes sabemos quantos vezes certo looping será executado
