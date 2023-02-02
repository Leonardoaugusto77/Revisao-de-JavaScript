/* scrollIntoView -> serve para rolarmos a pagina (podemos usar pra rolar um canto da pagina para outro) */


var c1 = document.querySelector('#img01')
var c2 = document.querySelector('#img01')
var c3 = document.querySelector('#img01')
var c4 = document.querySelector('#img01')

const rolar = () => {
    document.querySelector('#img01').scrollIntoView()
    document.querySelector('#img02').scrollIntoView()
    document.querySelector('#img03').scrollIntoView()
    document.querySelector('#img04').scrollIntoView()
}

c1.addEventListener('click', rolar)
c2.addEventListener('click', rolar)
c3.addEventListener('click', rolar)
c4.addEventListener('click', rolar)