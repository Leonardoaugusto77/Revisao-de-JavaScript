
/* Trabalhando com Match parte - 02 */


/* Método search 

Search - Retorna a primeira ocorrencia encontrada,


*/

var texto = document.getElementById("txt").innerHTML


var res = texto.search(/aula/i)


document.write(res)
document.write("<br>")





/* Método Replace 

Replace - Substitui os elementos selecionados


*/

var texto = document.getElementById("txt").innerHTML


var res = texto.replace(/curso/i, "JavaS")


document.write(res)
document.write("<br>")

/* Método charAt

charAt - Retorna o caracter que eu indiquei a posição como paramentro do metodo
charCodeAt - retorna um número inteiro entre 0 e 65535 que representa a unidade de código UTF-16 no índice fornecido.
fromCharCode - Transforma o caracter em código

*/

var texto = document.getElementById("txt").innerHTML


var res = texto.charAt(2)
var res2 = texto.charCodeAt(2) // Retorna o codigo da string indicada pela posição



document.write(res)

document.write("<br>")

document.write(res2)


document.write(String.fromCharCode(67))



/* Método concat

    Junta uma string na outra, é possível juntar 3 ou mais strings

*/

var texto = document.getElementById("txt").innerHTML
var text02 = " - aula 46 do curso de javascripts"


var res = texto.concat(text02)

document.write(res)











