// Formatação condicional com JavaScript

var tabela = document.getElementById("tabela")
var nota

for(let i = 1; i < tabela.rows.length; i++){
    nota= parseFloat(tabela.rows[i].cells[1].innerHTML) + parseFloat(tabela.rows[i].cells[2].innerHTML)
    tabela.rows[i].cells[3].innerHTML=nota
}

// Com o FOR a cima vamos percorer as linhas da tabela

var n = []
n[0]=document.getElementById("n1")
n[1]=document.getElementById("n2")
n[2]=document.getElementById("n3")
n[3]=document.getElementById("n4")

for(let i = 0; i < 4; i++){
    if(n[i].innerHTML < 70){
        n[i].style.color="#f00"
    } else{
        n[i].style.color="#00f"
    }
}







const updateValue = () =>{
    
}