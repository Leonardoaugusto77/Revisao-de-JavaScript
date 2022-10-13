
/* toString -  Converte um item para string */

var texto = document.getElementById("txt").innerHTML

var num = 15

var res = num.toString()
var bin = num.toString(2)
var oct = num.toString(8)
var hex = num.toString(16) // é possível usar o toString para coverter numeros para bases

document.write(res + "<br>")
document.write(bin + "<br>")
document.write(oct + "<br>")
document.write(hex + "<br>")

// Trim - Remove espaços no começo e final das strings
var texto1 = "              Leonardo Augusto - Desenvolvedor Front - end"

alert(texto1.trim())

document.write(res + "<br>")

/* Como Usar Caracteres especias no JS
 
Se quisermos colocar uma palavra entre "", nesses casos utilizamos \\ 


\n\n -- Quebra de linha não funciona no HTML
*/

var texto2 = "Leonardo - \"Dev\" "

document.write(texto2)

