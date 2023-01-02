// CreateElement -> Em um documento HTML, o método Document.createElement() cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido.
// appendChild ->  é um dos métodos fundamentais da programação para a web usando o DOM. O método appendChild() insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente.
// ChildNodes ->  Controla (ou faz a contagem) de determinados elementos da nossa pagina 
var p = document.createElement('p')

// p.textContent = 'CFB Cursos'

var t = document.createTextNode('Leonardo Augusto - Desenvolvedor Front - end jr')

p.appendChild(t)

document.body.appendChild(p)





let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let input = document.querySelector('#add')

btn.addEventListener('click', ()=>{
    let lista = document.querySelector('#lista')
    let li = document.createElement('li')

    li.textContent = input.value

    lista.appendChild(li)

    input.value = ''
    input.focus()
})

btn2.addEventListener('click', ()=>{
    let lista = document.querySelector('#lista')
    let num = lista.childNodes.length
    alert(num)
})