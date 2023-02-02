/* Hidden -> Atributo nativo do JavaScript que serve para ocultar elementos, ele trabalha com true and false, sendo true para ele
ficar oculto e false para não  */

document.getElementById('btn1').addEventListener('click',()=>{
    document.getElementById("p").hidden = true // Deixando o elemento escondido
})

document.getElementById('btn2').addEventListener('click',()=>{
    document.getElementById("p").hidden = false // Dessa maneira o paragrafo não ficara oculto
})



