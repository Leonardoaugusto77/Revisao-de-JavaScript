// O que o getElementById() faz?

/*
 Esse comando é bem simples e bastante utilizado no Desenvolvimento web, ele é responsável por pegar
 elementos com um Id, por exemplo, uma div no html com o id dv1

 <div id="dv1"></div> <-- Essa div está no nosso arquivo HTML com o nome de GetElementById()

*/

var div1 = document.getElementById("dv1") // Sempre é recomendável guardar o id do elemento dentro de uma Variável, assim fica mais fácil a sua manipulação


div1.innerHTML = "Olá isso é um texto adicionado por JavaScript"

// Vamos conhecer o InnerHtml na proxima aula