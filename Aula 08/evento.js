// Trabalhando com Eventos no JavaScript

/* 
   Eventos são ações ou ocorrência que acontecem no sistema que estamos desenvolvendo, no qual
   este te alerta sobre essas ações para que você possa responder de alguma forma.*/

// Exemplo 01:

 function mudaCor(obj,cor){
    obj.style.backgroundColor=cor
}
 

/*
    Na função a cima passamos dois parâmetros para a função mudaCor(), logo a baixo
    o obj vai receber o style e backgroundColor como método e este recebera o parâmetro cor
    como value.

    Para entender a segunda parte do código leia o comentário no arquivo HTML
*/


// Exemplo - 02:

function mudaPos(obj){
    obj.style.position="absolute";
    obj.style.left=Math.random()*500+"px";
    obj.style.top=Math.random()*500+"px";
}


/* 
   No exemplo 02 vamos criar uma função que muda a posição do botão toda vez que passarmos o mouse por cima,
   obj vai receber o style.positon absolute que permite a movimentação do elemento pelo display, logo a baixo iremos usar
   o método math.random multiplicado por 500 pixels, ou seja, a cada vez que a função for executada o botão ira para uma posição aleatória
   se deslocando 500pxs
*/


// Exemplo - 03

function ola(){
    let data = new Date() // Pega os métodos do Date
    var hora = data.getHours() // Pega as horas da máquina
    
    let txt = ""
    
    if(hora < 12){
        txt = "Bom dia!"
    } else if(hora < 18){
        txt = "Boa tarde!" 
    } else {
        txt = "Boa noite"
    }

    alert("Olá, " + txt)

}


// No exemplo a cima estamos criando uma mensagem de Boas-vindas que será executada quando a página for carregado
