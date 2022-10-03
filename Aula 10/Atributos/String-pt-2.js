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


*/

var texto = document.getElementById("txt").innerHTML


var res = texto.charAt(2)
var res2 = texto.charCodeAt(2)


document.write(res)

document.write("<br>")

document.write(res2)












