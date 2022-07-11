// addEventListener prática


var px=0
var py=0
var obj = document.getElementById("dv1");

// (C)
function move(){
    let tecla = event.keyCode;

    // 37 = esquerda  38 = cima 39 = direta  40 = baixo

    if(tecla==37){
        px-=10
        obj.style.left=px+"px"
    } else if(tecla==38){
        py-=10
        obj.style.top=py+"px"
    } else if(tecla==39){
        px+= 10
        obj.style.left=px+'px'
    } else if(tecla==40){
        py+=10
        obj.style.top=py+"px"
    } else if(tecla==13){
       alert("Evento keydown Removido")
       obj.style.backgroundColor = "white"
       this.removeEventListener("keydown", move)
    }

}

// (B)
function addMove(){
    document.addEventListener('keydown', move)
    obj.style.backgroundColor = "#f00"
}


// (A)
function inicia(){
  obj.addEventListener("click", addMove)
}

// (D)
window.addEventListener('load', inicia)





/* 
Na programação é comum chamar uma função dentro da outra, no exemplo a cima criamos uma função
chamada inicia (A) que vai chamar a função addMove (B), que por sua vez vai chamar os eventos de keydown e a função move (C), por
ultimo adicionamos um evento de load (D) que vai puxar todas as rotinas programadas anteriormente e assim o programa será executado. 


*/

