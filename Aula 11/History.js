/*  History -> Utilizado para manipular o historico da nossa página, podemos avançar e retroceder atráves de alguns metodos */


let painel = document.querySelector('#info')
let btnback = document.querySelector('#btnback')
let btngo = document.querySelector('#btngo')
let btngos = document.querySelector('#btngos')

const btnb = () =>{
    btnback = history.back() // Retorna uma página
}
const btng = () =>{
    btnback = history.forward() // Avança uma página
}

const hg = () => {
    btngos = history.go(+1)
}

const inicia = () =>{
    painel.innerHTML = history.length // Retorna o tamanho do nosso historico
}

window.addEventListener('load', inicia)

btnback.addEventListener('click', btnb)
btngo.addEventListener('click', btng)
btngos.addEventListener('click', btngos)