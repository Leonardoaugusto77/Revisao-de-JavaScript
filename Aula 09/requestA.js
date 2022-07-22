// O que é requestAnimationFrame

/*
    Utilizada para trabalhar com animações requestAnimationFrame fala para o navegador que deseja realizar uma 
    animação antes da próxima repintura, ele só precisa da função que será chamada várias vezes (callback), o método
    sempre é chamada quando uma animação for atualizada na tela, lembrando que o frame tate é controlado pelo Browser

    obs:  A taxa de callbacks é reduzida quando executados em aba de fundo ou em 
    <iframe> escondidos para melhorar performance e vida de bateria.
*/


var jog = document.getElementById("jogador")
var vel // velocidade
var dx // Direção (deslocamento) eixo x
var dy // Direção (deslocamento) eixo y
var px // posicão x
var py // posicão y
var anima // Váriavel de controle


function inicia(){
    vel = 2
    dx = 1
    dy = 0
    px = 0
    py = 0
    jog.addEventListener('click', function(event){
        cancelAnimationFrame(anima) // Função que cancela a animação
    })
   game()
}

function game(){
    px+= (dx*vel)
    py+= (dx*vel)
    jog.style.left = px +'px'
    // jog.style.top = px +'px'
    anima = requestAnimationFrame(game) // Recursividade
    
    if(px > 800){
        dx=-1
    } else if(px <= 100){
        dx = 1
    }
}


/*

Controle de movimentação, dx vai receber a direção x vezes (*) a velocidade


*/


window.addEventListener('load', inicia) s// Chama a função que vai executar