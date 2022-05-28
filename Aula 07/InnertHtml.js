// O que faz o innerHTML?

/*
    





*/

// var cxt = document.getElementById("cxtexto").value="JavaScript Developer";

// alert(cxt)

/* Esse exercício a cima e para aprender um pouco 
   mais sobre o getElement, usando o .value podemos modificar
   valores de inputs, por exemplo. No HTML você pode ver 
   que o valor do value é Desenvolvedor com o script acima
   vemos que se você carregar a página no chrome o value 
   passara a ser "JavaScript Developer"
*/


// 
// Agora sim vamos falar sobre o InnerHTML

/*
    O InnerHTMl é responsável pela manipulação dos elementos html em si, ele e capaz 
    de receber valores e interpretar no navegador(Ele consegue receber valores de Vars Js) e 
    assim realiza a atribuição.

    // document.body.innerHTML = '' <-- Nessa caso estamos manipulando o body na nossa página html, passando um String  vazia " "
                                        o body será renderizado totalmente vazio, caso você execute esse comando em alguma
                                        Pagina web ela então irá ficar toda em branco.
*/

var cxt = document.getElementById("texto").innerHTML; // Nesse caso agora vamos pegar o valor que está dentro do <p> 

alert(cxt) // é logo em seguida será exibido o resultado na caixa de alert


// document.body.innerHTML = ''
