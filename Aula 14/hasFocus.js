/* hasFocus -> Retorna true o false se uma página está em foco ou não */

var dvmsg = document.querySelector('#dvmsg')
var simnao = document.querySelector('#simnao')

const foco = () => {
    if(document.hasFocus()){
        document.body.setAttribute('class', 'dia')
    } else {
        document.body.setAttribute('class', 'noite')
    }
}


setInterval(foco, 1000)