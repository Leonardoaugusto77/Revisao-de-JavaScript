// getAttribute -> pega o atributo do elemento especificado

var elemento = document.getElementById('p1')
var att = elemento.getAttribute('id')

function inicia(){
   console.log(att)
}

inicia()