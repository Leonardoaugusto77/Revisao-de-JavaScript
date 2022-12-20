// Window.innerWidth -> Retorna a Largura da janela em pixels incluindo a largura da barra de rolagem
// Window.innerHeight -> Retorna a Altura da janela em pixels incluindo a largura da barra de rolagem

var l, a ,px , py
var painel = document.querySelector('.painel')
var btn = document.querySelector('#btn')


 

btn.addEventListener("click",()=>{
    l=window.innerWidth // outerWidth largura externa
    a=window.innerHeight
    px = window.screenX // Pega a posição das janelas no eixo Y
    py = window.screenY
    painel.innerHTML = 'L: ' + l + ' - A: ' + a + ' X: ' + px + ' - Y: ' + py
})


