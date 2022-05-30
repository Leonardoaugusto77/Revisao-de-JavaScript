// O que faz o querySelectorAll?


/*
   Ele é semelhante ao getElementsBytagName(), a diferença principal é que o query 
   é um método que retorna os elementos do documento que correspondem a uma classe do CSS3, 
   como um objeto dentro de uma lista de objetos (array).
*/


// Exemplo de seleção 

 var ps = document.querySelectorAll("p")

 ps[0].style.color="blue"

// O código a cima retorna as tags p que foram passadas para o query e logo a baixo estamos modificando a cor do <p> com índice 0


// Selecioando os itens com a class titulo

var elementos = document.querySelectorAll(".titulo")

 for(let i = 0; i < elementos.length; i++){
    // document.write(elementos[i].innerHTML + '<br>') 

// Nesse exemplo a cima estamos pegando e printando na tela todos os elementos com a classe titulo


// Selecionado os filhos de um element com o querySelectorAll()

var divP = document.querySelectorAll("div > p")

for(let i = 0; i < divP.length; i++){
    divP[i].style.color="#0a0"
}

/* Logo a cima estamos dizendo que vamos modificar as tags <p> que estão dentro das divs da nossa página web */