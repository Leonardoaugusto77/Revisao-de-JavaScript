// replaceChild -> Permite substituir um elemento por outro

function inicia(){
    let novoH1 = document.createElement('h1')
   
    let lista = document.querySelector('.container')
    let antigo = lista.childNodes[5]
    let txth = document.createTextNode(antigo.innerHTML)

    novoH1.appendChild(txth)
    lista.replaceChild(novoH1, antigo) // Recebe dois paramentros o que será substituido eo novo
}

inicia()