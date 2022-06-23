// Manipulando Forms com JavaScript

 var fm = document.forms.length // O document.forms retorna uma HTMLCollection referentes aos elementos de construção de formulários

 document.write(fm) // Vai retornar quantos <form> tem na página, lembrando que o form é contato através da abertura e fechamento das tags forms veja o exemplo a seguir

/*
    <form> </form> 

    <form> </form> 

    Se na sua página web tiver dois desses ao executar o código a cima será retornado o valor 2
  
*/

// Como retornar os itens de um form?

 var fm1 = document.forms[1].id // Nesse exemplo estamos retornando o id através de um vetor
 document.write(fm1)


 var fm3 = document.forms.item(0).id // Outra maneira de retornar o id de um item

 document.write(fm3)

 // Podemos também retornar um form inteiro, por exemplo:

 var fm4 = document.forms.namedItem("curso2").innerHTML
 document.write(fm4)


// Manipulando os forms

 var fm5 = document.forms["curso1"].elements[0].value // Os elements são os itens de dentro do Form

 document.write(fm5)


var fm6 = document.forms[0]

var el = fm6.elements
for(let i = 0; el.length-1;i++){
    el[i].style.backgroundColor="#ddd"; // Aqui estamos modificando as cores de fundo do primeiro input selecionado
    el[i].value = "Novo texto"; //  usando o value vamos alterar o texto dentro do input  
}



