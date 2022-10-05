/* Trabalhando com Match */


/* Match é responsavel por fazer um busca dentro da string para localizar um texto especifico 
*/

/* Exemplo - 01 (Localizando a String) */
 var texto = document.getElementById("txt").innerHTML


 var res = texto.match("aula") // Dessa maneira vamos localizar a string e printar na tela, caso não encontre o res será null


 document.write(res)


/* Exemplo - 02 (Descobrindo o número de carateres) */

 var texto = document.getElementById("txt").innerHTML


var res = texto.match("aula")


 document.write(res.length) // Com o length(tamanho) podemos retornar quantas palavras "aula" tem no nosso <p>


/* Exemplo - 02 (Utilizando modificadores na pesquisa) */

var texto = document.getElementById("txt").innerHTML


var res = texto.match(/[a-g]/ig)


document.write(res + ": " + res.length + "<br>")







