/* LocalStorage -> Ele define uma aréa para guarda chave e valor, ele não são excluidos caso você feche o aba, o localstorage não 
tempo limite para expirar */


if(typeof(Storage)!= 'undefine'){ // Testando se o Browser é compativivel com o WebStorage
    
localStorage.setItem('Chave', 'Teste') // O metodo cria uma chave e valor quando é executada ou ele irá atualizar caso a chave já exista

localStorage.removeItem('Teste') // Remove o item salvo no localstorage através da sua chave

var chave = localStorage.getItem('Chave') // Retorna o valor de localstorage

/*
    Existe outra maneira de usar o getItem com a seguinte sintaxe

    var chave = localStorage.Chave

*/

document.write(chave)
    
} else {
    window.alert('Sem suporte ao WebStorage')
    
}



if(typeof(Storage)!= 'undefined' ){
    if(localStorage.visitas){
        localStorage.visitas = Number(localStorage.visitas) + 1

    } else {
        localStorage.visitas = 1 
    }
    document.write('Visita ' + localStorage.visitas)
} else {
    document.write('Sem suporte a Web Storage!')    
}


