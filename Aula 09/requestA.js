// O que é requestAnimationFrame

/*
    Utilizada para trabalhar com animações requestAnimationFrame fala para o navegador que deseja realizar uma 
    animação antes da próxima repintura, ele só precisa da função que será chamada várias vezes (callback), o método
    sempre é chamada quando uma animação for atualizada na tela, lembrando que o framerate é controlado pelo Browser

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
var estado // 1 - movendo 0 - parada


function inicia(){
    vel = 2
    dx = 1
    dy = 0
    px = 0
    py = 0
    estado = 1
    jog.addEventListener('click', moverParar)
    document.getElementById("btn1").addEventListener('click', btnMover)
    document.getElementById("btn2").addEventListener('click', btnParar)
    game()
}

function moverParar(){
   if(estado){
    estado = 0
    jog.style.backgroundColor="red"
    cancelAnimationFrame(anima)
   } else {
    estado = 1
    jog.style.backgroundColor="blue"
    anima = requestAnimationFrame(game)
   }

}

function btnMover(){
        estado = 1
        jog.style.backgroundColor = "blue"
        anima = requestAnimationFrame(game)
    }


function btnParar(){
    estado = 0
    jog.style.backgroundColor = "red"
    cancelAnimationFrame(anima)
    
}


function game(){
    px+= (dx*vel)
    py+= (dy*vel)
    jog.style.left = px +'px' // Direção que a DIV vai se mover
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


window.addEventListener('load', inicia)// Chama a função que vai executar