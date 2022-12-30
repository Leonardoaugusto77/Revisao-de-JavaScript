/*
O sessionStorage, é bem similar ao localStorage, também servindo para armazenar informações no navegador. A diferença entre eles é 
que o sessionStorage, possui expiração da sessão
*/


function pagina(pg){
    sessionStorage.nome = document.querySelector('#fnome').value
    window.location.assign('page' + pg + '.html')
}

function inicia(){
    document.getElementById("btnp2").addEventListener('click', ()=>{
        pagina(2)
    })

    document.getElementById("btnp3").addEventListener('click',()=>{
        pagina(3)
    })
}

window.addEventListener('load', inicia)

