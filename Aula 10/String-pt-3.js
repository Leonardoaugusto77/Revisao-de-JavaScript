/* Indexof - Retorna a posição de um caracter que for passado para ele 
    
    quando ele não achar o caracter o retorno será -1 e lembrando que ele retorna o primeiro 
    caracter encontrado, se quisermos retorna o ultimo caracter vamos usar o lastIndexOf


*/

/* var texto = document.getElementById("txt").innerHTML

var res = texto.indexOf('J')

if(res < 0){
    alert("Letra não encontrada")
} else{
    alert(`A posição é ${res}`)
}

document.write(res)
*/

/* localeCompare - faz a compração de duas Strings */

var texto = document.getElementById("txt").innerHTML
var texto2 = texto

var res = texto.localeCompare(texto2)

// 0 = iguais
// ! = Diferentes

if(res == 0){
    alert("Ok")
} else{
    alert("ERRO")
}

document.write(res)


/* Slice - Corta a string em um ponto especifico   */

var texto = document.getElementById("txt").innerHTML

var res = texto.slice(10,32) // Usando anotação de array vamos indicar de qual a qual queremos cortar com o slice

document.write(res)


/* Split - Pica a string no carcter que for indicado    */

var texto = document.getElementById("txt").innerHTML

var res = texto.split(" ") // Usando anotação de array vamos indicar de qual a qual queremos cortar com o slice

document.write(res[5])

/* toLocaleLowerCase - converte as strings em letras minusculas     */

var texto = document.getElementById("txt").innerHTML

var res = texto.toLocaleLowerCase() // Usando anotação de array vamos indicar de qual a qual queremos cortar com o slice

document.write(res)

/* toLocaleUpperCase - converte as strings em letras MAIUSCULAS     */

var texto = document.getElementById("txt").innerHTML

var res = texto.toLocaleUpperCase().slice(10,32) // Usando anotação de array vamos indicar de qual a qual queremos cortar com o slice

document.write(res)