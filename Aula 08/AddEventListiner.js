// O que é o AddEventListener?

/*

O método JavaScript addEventListener () permite configurar funções a serem chamadas 
quando um evento especificado acontece, como quando um usuário clica em um botão. 

*/

// Exemplo 01:

var dv1 = document.getElementById("dv1")

function msg(){
    alert("Leonardo Augusto - Desenvolvedor Front - end")
}

dv1.addEventListener("click", msg)

/*
    Nesse exemplo a cima estamos criando um evento de click, devemos ficar atentos já que utilizando o addEventListener()
    não é necessário utilizar ON nos eventos, o onclick vira click, por exemplo.
*/

// Exemplo 02:

var btn = document.getElementById("btn")

function btns(){
    btn.style.background = "purple"
}


btn.addEventListener("dblclick", btns)

/* No exemplo  a cima estamos mudando a cor do nosso botão com um duplo click */


// Exemplo 03:


var dv2 = document.getElementById("dv2")

dv2.addEventListener('mouseenter', function mudacor2(){
    dv2.style.backgroundColor = "green"

})

/*  No addEvent podemos utilizar funções como parâmetros assim reduzindo o código espalhado */









