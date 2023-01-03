// parentNode -> Retorna o pai de um elemento especificado
// remove -> Remove o elemento especificado
// removeChild -> remove o elemento filho especificado


function inicia(){
    let elemento = document.querySelector('.container').childNodes
    document.querySelector('.container').removeChild(elemento[5])
}

inicia()