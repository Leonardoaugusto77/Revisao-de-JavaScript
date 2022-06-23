// Trabalhando com Eventos no JavaScript


/* 
   Eventos são ações ou ocorrência que acontecem no sistema que estamos desenvolvendo, no qual
   este te alerta sobre essas ações para que você possa responder de alguma forma.*/

 function mudaCor(obj,cor){
    obj.style.backgroundColor=cor

 }
 
mudaCor()

function mudaPos(obj){
    obj.style.position="absolute";
    obj.style.left=Math.random()*500+"px";
    obj.style.top=Math.random()*500+"px";
}


function ola(){
    let data = new Date()
    var hora = data.getHours()
    
    let txt = ""
    
    if(hora < 12){
        txt = "Bom dia!"
    } else if(hora < 18){
        txt = "Boa tarde!"
    } else {
        txt = "Boa noite"
    }

    alert("Olá, " + txt)

}
