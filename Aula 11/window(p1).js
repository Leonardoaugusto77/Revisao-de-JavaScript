// Objeto Window -> Representa uma janela que contém um elemento DOM 

let btnO = document.getElementById('btnO')
let btnF = document.getElementById('btnF')


btnO.addEventListener('click', ()=>{
    window.open('JanelaEX.html', '_blank', 'width=300, height=200') 
    /* Abre uma nova janela (popap), podemos abrir uma nova janela se usarmos paramentro!
       Além disso é possível abrir em um iframe e se caso passarmos width e heigth dentro dos configurações ele irá abrir uma nova aba com
       as especificações, colocando as posicções vamos escolher a onde a janela abre
    */
    
})

btnF.addEventListener('click', ()=>{
    window.close('janelaEX.html') // O Close irá fechar a janela desejada que for passada como Parametro
})




