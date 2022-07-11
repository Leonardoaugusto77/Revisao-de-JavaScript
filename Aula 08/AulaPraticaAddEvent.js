var dx // Direção X
var dy // Direção Y
var px // Posicionamento X - O Salto
var py // Posicionamento Y - O Salto
var vel // Velocidade
var obj // Objeto que será manipulado
var tmp // timer


function inica(){
     dx = 0 // Direção X
     dy = 0 // Direção Y
     px = 0 // Posicionamento X - O Salto
     py = 0 // Posicionamento Y - O Salto
     vel = 10 // Velocidade
     obj = document.getElementById("dv1") // Objeto que será manipulado
     document.addEventListener("keydown", teclaDw)
     document.addEventListener("keyup", teclaUp)
     tmp = setInterval(entreFrame,5)
}

function teclaDw(){
    let tecla = event.keyCode // Para capturar os codigos das teclas 
        if(tecla==37){ // 37 - para esquerda
            dx=-1
        } else if(tecla==38){ // 38 - para cima
            dy=-1
        } else if(tecla==39){ // 39 - para direita
            dx=1
        } else if(tecla==40){ // 40 - para baixo
            dy=1
        }
}
function teclaUp(){
    let tecla = event.keyCode // Para capturar os codigos das teclas 
        if(tecla==37){ 
            dx= 0
        } else if(tecla==38){ 
            dy= 0
        } else if(tecla==39){ 
            dx= 0
        } else if(tecla==40){ 
            dy= 0
        }
}

// toda a atualização do algoritmo vai começar aqui 
function entreFrame(){
    px+=dx*vel
    py+=dy*vel
    obj.style.left=px+"px" 
    obj.style.top=py+"px" 
}

// Quando for liberada a posicão x vai receber 0, para a div para de deslocar



window.addEventListener("load", inica)