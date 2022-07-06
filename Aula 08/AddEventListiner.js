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
    btn.style.background = "red"
}


btn.addEventListener("dblclick", btns)










