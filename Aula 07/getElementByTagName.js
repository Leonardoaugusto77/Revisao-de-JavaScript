// O que o getElementBytagName() faz?


/*
    Esse comando é  responsável por retornar um conjunto de elementos, ou seja
    será passada uma tag para o método e ele retornar todas as tags selecionadas,
    vamos ver alguns exemplos para ficar mais claro. Também é interessante comentar
    que é possível trabalhar com vetores com esse método



*/

var tagsP = document.getElementsByTagName("p").length // Utilizando o Length é possível ver quantas tags p tem na página

document.write(tagsP)


// Utilizando o metodo com Vetores


var tagsP2 = document.getElementsByTagName("p")

document.write(tagsP2[2].innerHTML) // O InnerHTML vai ler o valor html e retornar, sem ele não sera possível capturar o índice desejado


var tagsP3 = document.getElementsByTagName("p")[2] // Dessa maneira não será necessário utilizar o índice dentro do Write

document.write(tagsP3.innerHTML)


/*
    Podemos mudar a cor das tags entre outras alterações, o JavaScript disponibiliza 
    bastantes recursos de manipulação
*/