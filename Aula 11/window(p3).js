/* window.scrollBy -> Rola o documento desejado baseado atráves da configuração passada
    let btn = document.getElementById("btn")

    btn.addEventListener('click', ()=>{
    window.scrollBy(500,500) // ele necessitada de dois paramentros que são os valores para o x e para o y
})

*/


// window.length -> Retorna os iframes da página

window.addEventListener('load', ()=>{
    let qtde = window.length
    let painel = document.querySelector('.painel').innerHTML = qtde

    for(let i = 0; i < qtde; i++){
        window.frames[i].location = 'http://cfbcursos.com.br' // Nos possibilita carregar links dentro do iframes da página
    }
    
})

