/* dataset -> Nos permite adicionar propriedades aos elementos */

var c1 = document.querySelector('#c1')
var c2 = document.querySelector('#c2')
var c3 = document.querySelector('#c3')
var c4 = document.querySelector('#c4')
var painel = document.querySelector('#painel')

const info = (e) => {
    let cor = e.target.dataset.cor /* pegos os datasets de cada elemento atráves do event de click */
    let valor = e.target.dataset.valor

    painel.innerHTML = `<h4>${cor} - ${valor}</h4>`

}

c1.addEventListener('click', info)
c2.addEventListener('click', info)
c3.addEventListener('click', info)
c4.addEventListener('click', info)
