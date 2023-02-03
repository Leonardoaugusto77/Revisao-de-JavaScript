var obj = document.getElementById("personagem")

function trocaCarro(c){
    if(c==1){
        obj.setAttribute("class", "c1")
    } else if(c==2){
        obj.setAttribute("class", "c2")
    } else if(c==3){
        obj.setAttribute("class", "c3")
    } else{
        obj.setAttribute("class", "c4")
    } 
}

function removePerso(){
    obj.removeAttribute("class")
}

function check(){
   if(obj.hasAttribute("class")){
    alert("Com atributo")
   } else {
    alert("Sem atributo")
   }

}