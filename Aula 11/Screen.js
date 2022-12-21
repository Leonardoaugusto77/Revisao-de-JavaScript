/* Objeto Screen -> Retorna informações referente a tela do usuário como a largura, altura e cores */

let painel = document.querySelector('#painel')

const inicia = () => {
    // painel.innerHTML += 'Largura ' +  screen.width + 'px' // Retorna a largura da tela
    // painel += '<br>'
    // painel.innerHTML += 'Altura ' + screen.height + 'px' // Retorna a altura da tela
    painel.innerHTML += 'Resolução: ' + screen.availWidth + 'px  X ' + screen.availHeight + 'px<hr>' // Retorna a resolução 


        if(screen.width === 1024){
            document.body.style.backgroundColor = 'red'
        } else {
            document.body.style.backgroundColor = 'blue'
        } 
        if(screen.width <= 480){
            window.alert('teste')
            
        }
}

window.addEventListener('load', async ()=>{
    setInterval(inicia, 2000)
    return
})


/* Com o objeto Screen podemos fazer uma responsividade melhor para os nossos Slider e afins */
