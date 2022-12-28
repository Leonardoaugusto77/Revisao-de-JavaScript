var vcorf, vcort, vnome
var form = document.getElementById('fconf')

window.addEventListener('load', ()=> {
    if(localStorage.nome){
        vcorf=localStorage.corf
        vcort=localStorage.cort
        vnome=localStorage.nome
        defineCor(1,vcorf)
        defineCor(2,vcort)
        defineCor(3,vnome)
        window.alert("Bem vindo novamente " + vnome + "!!!")
    }
})




const gravar = () => {
    vnome = document.getElementById('fnome').value
    localStorage.corf=vcorf
    localStorage.cort=vcort
    localStorage.nome=vnome
    form.style.display='none'

}

const mostrarForm = () => {
   form.style.display='block'
}


const defineCor = (op, cor) => {
    if(op==1){
        document.body.style.backgroundColor = cor
        vcorf=cor
    } else {
        document.body.style.color = cor
        vcort=cor
    }
}